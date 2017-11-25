import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class EmailService {
  success : number;

  constructor(private http: Http) {
    this.success = 0;
  }

  postEmail(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/email', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          this.success = -1;
        });
    });
  }

}
