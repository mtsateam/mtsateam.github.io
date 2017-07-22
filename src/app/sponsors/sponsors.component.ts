import { Component, OnInit } from '@angular/core';
import { SponsorsService } from './sponsors.service'
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  allSponsors : any;
  sponsor_id : any;
  title: any ;
  lat :any;
  lng : any;

  constructor(public sponsorsService: SponsorsService){}

  ngOnInit() {
    this.getAllSponsors();
    this.title=  'My first AGM project';
    this.lat = 45.523355;
    this.lng= -73.705564;

  }

  getAllSponsors(){
    this.sponsorsService.getAllSponsors().then((res) => {
      this.allSponsors = res;
    })
  }



  getSponsorAddressID(sponsor_ID){
    this.sponsorsService.getSponsorAddressID(sponsor_ID).then((res) => {
      this.sponsor_id = res;
    })
  }
}
