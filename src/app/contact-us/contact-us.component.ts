import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  valid: any;

  constructor(public emailService: EmailService){
  }

  ngOnInit() {
  }

  validate(){
    let name = (<HTMLInputElement>document.getElementsByName("contact-name")[0]);
    let email = (<HTMLInputElement>document.getElementsByName("contact-email")[0]);
    let subject = (<HTMLInputElement>document.getElementsByName("contact-subject")[0]);
    let text = (<HTMLInputElement>document.getElementsByName("contact-text")[0]);

    let returnError = false;

    if(name.value == "") {
      name.classList.add('error');
      returnError = true;
    }else name.classList.remove('error');

    if(email.validity.valid == false || email.value == "") {
      email.classList.add('error');
      returnError = true;
    }else email.classList.remove('error');

    if(subject.value == "") {
      subject.classList.add('error');
      returnError = true;
    }else subject.classList.remove('error');

    if(text.value == "") {
      text.classList.add('error');
      returnError = true;
    }else text.classList.remove('error');

    if(!returnError){
      let data = {
        "name": name.value,
        "email" : email.value,
        "subject": subject.value,
        "text":text.value
      };
      this.emailService.postEmail(data).then((res) => {
        if(res.json().email == "error"){

        }else{
          let elem = <HTMLInputElement>document.getElementsByName("done")[0];
          elem.setAttribute("style", "display: none !important");
        }
     })
    }

  }
}

