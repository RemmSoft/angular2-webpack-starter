import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });
  private apiUrl: string = 'http://localhost:31854/api';

  constructor(private http: Http){

  }

  private getJson(resp: Response) {
    return resp.json();
  }

  get(path: string): Observable<any>{
    return this.http.get(`${this.apiUrl}${path}`, this.headers)
      .map(this.getJson);
  };

}
