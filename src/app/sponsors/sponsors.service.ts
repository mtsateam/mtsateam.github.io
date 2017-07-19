import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SponsorsService {

  constructor(private http: Http) { }

  getAllSponsors() {
    return new Promise((resolve, reject) => {
      this.http.get('/sponsors')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getSponsorsByTier(id){
    return new Promise((resolve, reject) => {
      this.http.get('/sponsors/tier/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getSponsorByID(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/sponsors/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  getSponsorOfTheWeek(){
    return new Promise((resolve, reject) => {
      this.http.get('/sponsors/week')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  // saveBook(data) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post('/book', data)
  //       .map(res => res.json())
  //       .subscribe(res => {
  //         resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });
  // }
  //
  // updateBook(id, data) {
  //   return new Promise((resolve, reject) => {
  //     this.http.put('/book/'+id, data)
  //       .map(res => res.json())
  //       .subscribe(res => {
  //         resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });
  // }
  //
  // deleteBook(id) {
  //   return new Promise((resolve, reject) => {
  //     this.http.delete('/book/'+id)
  //       .subscribe(res => {
  //         resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });
  // }

}
