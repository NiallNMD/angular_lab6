import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>
  {
    return this.http.get('https://www.jsonblob.com/api/jsonblob/85485948-85c3-11eb-9929-ad4dd6bb1dbd');
  }
}
