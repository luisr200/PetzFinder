import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tag } from '../models/tag';
import { Observable, of } from 'rxjs';

const url = 'https://3aq8h6y40a.execute-api.us-west-2.amazonaws.com/stage';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTag(id: number): Observable<Tag>{
    return this.http.get<Tag>(url + '/tags/' + id);
  }
}
