import { Component, OnInit } from '@angular/core';
import { ExecsService } from './execs.service';

@Component({
  selector: 'app-execs',
  templateUrl: './execs.component.html',
  styles: []
})
export class ExecsComponent implements OnInit {

  execs:any ;

  // constructor(){}

  constructor(private execService: ExecsService) { }

  ngOnInit() {
    console.log("this is from the exec component")
    this.getExecList();
  }

  getExecList(){
    this.execService.getAllExecs().then((res) => {
      this.execs = res;
      console.log(res);
    })
  }
}

