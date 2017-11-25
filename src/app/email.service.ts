import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class EmailService {

  constructor(private http: Http) {
  }

  postEmail(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/email', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
        });
    });
  }

}
