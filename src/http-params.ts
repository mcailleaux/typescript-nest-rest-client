import { IHttpParams } from 'typescript-rest-client/src/http-params';

export class HttpParams implements IHttpParams {
  public params = new URLSearchParams();

  public append(param: string, value: string): any {
    this.params.append(name, value);
    return this;
  }

  public set(param: string, value: string): any {
    this.params.set(name, value);
    return this;
  }
}
