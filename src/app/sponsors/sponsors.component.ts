import { Component, OnInit } from '@angular/core';
import { SponsorsService } from './sponsors.service'


@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  allSponsors : any;
  sponsor_id : any;

  constructor(public sponsorsService: SponsorsService){}

  ngOnInit() {

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
