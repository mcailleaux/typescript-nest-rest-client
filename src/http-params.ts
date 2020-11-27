import { IHttpParams } from 'typescript-rest-client/src/http-params';

export class HttpParams implements IHttpParams {
  public params = new URLSearchParams();

  public append(param: string, value: string): any {
    this.params.append(param, value);
    return this;
  }

  public set(param: string, value: string): any {
    this.params.set(param, value);
    return this;
  }
}
