import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

  constructor(private http: Http) { }

  getAllEvents() {
    return new Promise((resolve, reject) => {
      this.http.get('/events')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getEventByID(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/events/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  getUpcomingEvent(){
    return new Promise((resolve, reject) => {
      this.http.get('/events/upcoming')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  getThumbnailEventList(){
    return new Promise((resolve, reject) => {
      this.http.get('/events/thumbnail')
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
