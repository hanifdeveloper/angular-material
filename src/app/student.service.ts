import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { map, take } from 'rxjs/operators';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }

  getStudents() {
    return this.http.get('http://localhost:3333/api/v1/students')
            .pipe(
              map(response => response.json()),
              take(1)
            )
            .catch(
              (error: Response ) => {
                  return Observable.throw('Something went wrong ');
                }
            );
  }
  

}
