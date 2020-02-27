import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UrlHandlingStrategy } from '@angular/router';

const apiUrl = environment.apiEnpoint;
const cognitoUrl = environment.cognitoEndpoint;


@Injectable({
  providedIn: 'root'
})
export class AwsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
  constructor(private http: HttpClient) { }

  getTokens(code: string): Observable<string> {
    console.log(this.getTokenParams(code));
    return this.http.post<string>(cognitoUrl + 'token', JSON.stringify(this.getTokenParams(code).toString()), this.httpOptions);
  }

  getTokenParams(val: string): HttpParams {
    const params = new HttpParams()
    .set('grant_type', environment.cognitoGrantType)
    .set('code', val)
    .set('client_id', environment.cognitoClientId)
    .set('redirect_uri', environment.cognitoredirectUrl);
    return params;
  }
}
