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

  getSponsorLocationCode(sponsor_ID){
    return new Promise((resolve, reject) => {
      this.http.get('/sponsors/' + sponsor_ID + '/locationID')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    })
  }
}
