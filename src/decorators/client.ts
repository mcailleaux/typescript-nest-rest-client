import { Client as GenericClient } from 'typescript-rest-client';
import { HttpHeaders } from '../http-headers';

export function Client(args: {
  serviceId?: () => string;
  baseUrl?: () => string;
  headers?: () => any;
}) {
  return <T extends Function>(Target: T): T => {
    return GenericClient({
      ...args,
      newHttpHeaders: (defaultHeaders?: { [name: string]: string }) =>
        new HttpHeaders(defaultHeaders),
      newHttpParams: () => new URLSearchParams(),
      newHttpRequest: (
        method: string,
        resUrl: string,
        body: any,
        init: {
          headers: HttpHeaders;
          params: URLSearchParams;
          withCredentials: boolean;
        }
      ) =>
        <any>{
          url: resUrl,
          method: method,
          body: body,
          data: body,
          headers: init.headers.headers,
          params: init.params,
          withCredentials: init.withCredentials,
        },
      defaultResponseBody: (res) => res.data,
    })(Target);
  };
}
