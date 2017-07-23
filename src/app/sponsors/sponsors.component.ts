import { Component, OnInit } from '@angular/core';
import { SponsorsService } from './sponsors.service'


@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  allSponsors : any;
  sponsorLocation_id : any;
  googleMaps_markers: any[];
  title: any ;

  zoom: number = 8;

  McGill_lat = 45.504785;
  McGill_lng = -73.577151;

  constructor(public sponsorsService: SponsorsService){
  }

  ngOnInit() {
    this.getAllSponsors();


  }

  getAllSponsors(){
    this.sponsorsService.getAllSponsors().then((res) => {
      this.allSponsors = res;
      this.createGoogleMapsMarkers();
    })
  }

  getSponsorLocationCode(sponsor_ID) {
    this.sponsorsService.getSponsorLocationCode(sponsor_ID).then((res) => {
      this.sponsorLocation_id = res;
    })
  }

  createGoogleMapsMarkers(){
    let markersList = [];
    this.allSponsors.forEach(function(sponsor){
      markersList.push(sponsor.locationID);
    })
    console.log(markersList)
    this.googleMaps_markers = markersList;
  }
}


