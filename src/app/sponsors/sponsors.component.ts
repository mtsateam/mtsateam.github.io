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
  marker = {
    display: true,
    lat: null,
    lng: null,
  };

  constructor(public sponsorsService: SponsorsService){
  }

  ngOnInit() {
    this.getAllSponsors();
  }

  clicked({target: marker}) {
    this.marker.lat = marker.getPosition().lat();
    this.marker.lng = marker.getPosition().lng();

    marker.nguiMapComponent.openInfoWindow('iw', marker);
  }

  hideMarkerInfo() {
    this.marker.display = !this.marker.display;
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
    this.googleMaps_markers = markersList;
  }
}


