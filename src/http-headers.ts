export class HttpHeaders {
  public headers: { [key: string]: string } = {};

  constructor(headers?: { [key: string]: string }) {
    this.headers = headers;
  }

  public append(name: string, value: string): any {
    this.set(name, value);
    return this;
  }

  public has(name: string): boolean {
    return this.headers[name.toLowerCase()] != null;
  }

  public set(name: string, value: string): any {
    this.headers[name.toLowerCase()] = value;
    return this;
  }
}
