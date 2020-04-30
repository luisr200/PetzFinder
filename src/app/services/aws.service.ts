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
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }).set('Authorization','Basic NDAyN2EzM2NxYmR2OWJmOW4xNnE3amIzYmg6a2tpbWgyZnE0dXRxcGkyOW5jaWM1djY5dmxhZHFqdDQ3ZjVnbjVtazk2Y2pmMXFwaWN1')
    //headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
  constructor(private http: HttpClient) { }

  getTokens(code: string): Observable<string> {
    console.log(this.getTokenParams(code));
    //console.log('token/grant_type=authorization_code&code=' + code + '&client_id=' + environment.cognitoClientId +'&redirect_uri='+ encodeURI(environment.cognitoredirectUrl));
    return this.http.post<string>(cognitoUrl + 'token', this.getTokenParams(code).toString(), this.httpOptions);
    //return this.http.post<string>(cognitoUrl + 'token/grant_type=authorization_code&code=' + code + '&client_id=' + environment.cognitoClientId +'&redirect_uri='+ encodeURI(environment.cognitoredirectUrl) , this.httpOptions);
    //return new Observable<string>();
  }

  getTokenParams(val: string): HttpParams {
    const params = new HttpParams()
    .set('grant_type', environment.cognitoGrantType)
    .set('client_id', environment.cognitoClientId)
    .set('code', val)
    //.set('client_secret', 'kkimh2fq4utqpi29ncic5v69vladqjt47f5gn5mk96cjf1qpicu')
    .set('redirect_uri', environment.cognitoredirectUrl);
    return params;
  }
}
