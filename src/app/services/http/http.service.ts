import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  serverUrls = {
    getChatAppChats: '/messengers/{{type}}/sessions',
    getChatAppInfo: '/messengers/{{type}}/about',
    login: '/users/login',
    logout: '/users/logout',
    dashboardTop: '/dashboard/top',
  };
  token: string;

  constructor(private http: HttpClient) {
    this.setToken();
  }
  getUrlByApiName(apiName: string, id?: string, adittional?: string): string {
    let url = environment.baseUrl + this.serverUrls[apiName].replace('{{id}}', id);
    if (adittional) {
      url += adittional;
    }
    return url;
}
setToken() {
  this.token = localStorage.getItem('userToken');
}
setHeaders(token): {headers: HttpHeaders} {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'authorization': `${token}`
    })
  };
  return httpOptions;
}
login(credentials): Observable<any> {
  return this.http.post(this.getUrlByApiName('login'), credentials);
}
logout(): Observable<any> {
  return this.http.post(this.getUrlByApiName('logout'), this.setHeaders(this.token));
}
}
