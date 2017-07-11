import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: [
    './welcome-page.component.css'
  ]
})
export class WelcomePageComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.createTagHTML(this.elementRef, "link", "text/css", "stylesheet", "http://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic,700italic");
    this.createTagHTML(this.elementRef, "link", "text/css", "stylesheet", "http://fonts.googleapis.com/css?family=Montserrat:400,700");
  }


  createTagHTML(elementRef, tag, type, rel, href) {
    var s = document.createElement(tag);
    s.type = type;
    s.rel = rel;
    s.href = href;
    elementRef.nativeElement.appendChild(s);
  }
}
