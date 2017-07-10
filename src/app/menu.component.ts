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

    // this.createTagHTML(this.elementRef, "script", "text/javascript", "../js/theme.js");
    // this.createTagHTML(this.elementRef, "script", "text/javascript", "../js/validate.js");
    // this.createTagHTML(this.elementRef, "script", "text/javascript", "../js/bootstrap.min.js");
    // this.createTagHTML(this.elementRef, "script", "text/javascript", "../js/jquery.easing.min.js");
    // this.createTagHTML(this.elementRef, "script", "text/javascript", "../js/jquery.js");


  }

  createTagHTML(elementRef, tag, type, src){
    var s = document.createElement(tag);
    s.type = type;
    s.src = src;
    elementRef.nativeElement.appendChild(s);
  }

}
