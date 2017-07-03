import { Component, OnInit } from '@angular/core';
import { ExecService } from '../exec.service'


@Component({
  selector: 'app-execs',
  templateUrl: './execs.component.html',
  styleUrls: ['./execs.component.css']
})
export class ExecsComponent implements OnInit {

  exec: any;

  constructor() { }

  ngOnInit() {
    // this.getExecsList();
  }
}
