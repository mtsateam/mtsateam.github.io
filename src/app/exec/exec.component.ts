import { Component, OnInit } from '@angular/core';
import { ExecService } from '../exec.service';

@Component({
  selector: 'app-exec',
  templateUrl: './exec.component.html',
  styles: []
})
export class ExecComponent implements OnInit {

  execs:any ;

  constructor(private execService: ExecService) { }

  ngOnInit() {
    console.log("this is from the exec component")
    this.getExecList();
  }

  getExecList(){
    this.execService.getAllExecs().then((res) => {
      this.execs = res;
      console.log(res);
    }), (err) => {
      console.log(err);
    }
  }
}
