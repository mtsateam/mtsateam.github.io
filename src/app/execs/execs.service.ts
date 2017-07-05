import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExecsService {

  constructor(private http: Http) { }

  getAllExecs() {
    return new Promise((resolve, reject) => {
      this.http.get('/execs')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllTeams(){
    return new Promise((resolve, reject) => {
      this.http.get('/execs/teams')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getExecByID(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/execs/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  getExecByTeamID(id){
    return new Promise((resolve, reject) => {
      this.http.get('/execs/teams/' + id)
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
