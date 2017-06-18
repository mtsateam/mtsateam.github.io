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
    this.getExecList();
  }

  getExecList(){
    this.execService.getAllExecs().then((res) => {
      this.execs = res;
    }), (err) => {
      console.log(err);
    }
  }
}
