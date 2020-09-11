export class HttpParams {
  public params: { [key: string]: string[] } = {};

  public append(name: string, value: string): any {
    if (!this.has(name)) {
      this.set(name, value);
    }
    this.params[name.toLowerCase()].push(value);
    return this;
  }

  public has(name: string): boolean {
    return this.params[name.toLowerCase()] != null;
  }

  public set(name: string, value: string): any {
    this.params[name.toLowerCase()] = [value];
    return this;
  }
}
