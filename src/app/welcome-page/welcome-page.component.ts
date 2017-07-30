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
  }


  createTagHTML(elementRef, tag, type, rel, href) {
    var s = document.createElement(tag);
    s.type = type;
    s.rel = rel;
    s.href = href;
    elementRef.nativeElement.appendChild(s);
  }
}
