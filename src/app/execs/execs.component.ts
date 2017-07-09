import { Component, OnInit } from '@angular/core';
import { ExecsService } from './execs.service';

@Component({
  selector: 'app-execs',
  templateUrl: './execs.component.html',
  styleUrls: [
    './execs.component.css',
    '../../css/bootstrap.css',
    // '../../../css/font-awesome.css'
  ]
})

export class ExecsComponent implements OnInit {

  allExecs:any ;
  allTeamsList: any;
  execListByTeamID:any ;

  constructor(public execService: ExecsService) { }

  ngOnInit() {
    this.getExecList();
    // this.getTeamsList()
    // this.getExecListByTeamsID();
  }
  getTeamsList(){
    console.log("getTeamsLIst called")
    this.execService.getAllTeams().then((res) => {
      console.log("getTeamsList() output: \n" + res)
      this.allTeamsList = res;
    })
  }

  getExecList(){
    this.execService.getAllExecs().then((res) => {
      this.allExecs = res;
    })
  }

  // getExecListByTeamsID(){
  //   console.log("getTeamsList called in getExecListByTeamsID")
  //   this.execService.getAllTeams().then((res) => {
  //     console.log("getTeamsList() output: \n" + res)
  //     this.allTeamsList = res;
  //
  //   })
  //   this.allTeamsList.forEach(function (teamID) {
  //     this.execService.getExecByTeamsID(teamID).then((res) => {
  //       console.log("getExecListByTeamsID() output: \n" + res);
  //       this.execListByTeamID = res;
  //     })
  //   })
  // }


}

