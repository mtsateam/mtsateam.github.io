import { Component, OnInit } from '@angular/core';
declare var googleAPIkey: any;
declare function geocodeAddress(address, callback): void;

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  title: any;
  lat: any;
  lng: any;


  ngOnInit() {
    this.title = 'My first AGM project';
    this.lat= 51.678418;
    this.lng= 7.809007;
  }


}
