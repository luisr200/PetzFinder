import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tag } from '../models/tag';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import {AwsService} from '../services/aws.service'


const cognitoUrl = environment.cognitoEndpoint;
const apiUrl = environment.apiEnpoint;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private awsService: AwsService) { }

  getUser(id: string): Observable<string> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer ' + this.awsService.tokens.access_token});
  //headers.set('Content-Type', 'application/json');

    let httpOptions = {
      headers: headers
    };
    //his.httpOptions.headers.append('Authorization', 'Bearer ' + this.awsService.tokens.access_token);
    console.log(httpOptions)
    return this.http.get<string>(cognitoUrl + 'userInfo', httpOptions);
  }

  getPetzfinderUser(id: string): Observable<string> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer ' + this.awsService.tokens.id_token});
    //let headers = new HttpHeaders({'Content-Type':'application/json'});

    let httpOptions = {
      headers: headers
    };
    //his.httpOptions.headers.append('Authorization', 'Bearer ' + this.awsService.tokens.access_token);
    console.log(httpOptions)
    return this.http.get<string>(apiUrl + '/users/luisr200@msn.com', httpOptions);
  }
}
