import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [
    './menu.component.css',
    '../css/bootstrap.css',
    '../css/font-awesome.min.css',
  ]

})
export class MenuComponent implements AfterViewInit {

  constructor(private elementRef:ElementRef) { }

  ngAfterViewInit() {
  }

  createTagHTML(elementRef, tag, type, src){
    var s = document.createElement(tag);
    s.type = type;
    s.src = src;
    elementRef.nativeElement.appendChild(s);
  }

}
