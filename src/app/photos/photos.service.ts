import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotosService {

  constructor(private http: Http) { }

  getAllAlbums() {
    return new Promise((resolve, reject) => {
      this.http.get('/facebook/album')
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


}
