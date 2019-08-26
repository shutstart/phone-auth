import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import {PhoneNumber} from '../phone.model';
import {environment} from '../../environments/environment';
import { AuthhService } from '../authh.service';

@Component({
  selector: 'app-auths',
  templateUrl: './auths.component.html',
  styleUrls: ['./auths.component.css']
})
export class AuthsComponent implements OnInit {
  phoneNumber = new PhoneNumber()
  user: any;
  constructor(public auth:AuthhService) { }

  ngOnInit() {    
    this.auth.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha',{
      'size': 'invisible',
      'callback': function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.auth.signInWithPhone()
      }
    })
    this.auth.windowRef.recaptchaVerifier.render()  
  }

  sendOTP(countryCode,number) {    
    this.phoneNumber.country=countryCode
    this.phoneNumber.number=number
    const num = this.phoneNumber.e164;
    console.log(num)
    this.auth.signInWithPhone(num).then(result => {
      this.auth.windowRef.confirmationResult = result;
    })
    .catch( error => console.log(error) );
  }
  varifyOTP(otp) {    
    this.auth.varifyOTP(otp).then( result => {
    this.user = result.user;
    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }
  signInWithGoogle(){
    this.auth.signInWithGoogle().then(user=>{
      this.user=user
      console.log(user)
    }).catch(err=>{
      console.log(err)
    })
  }
  

}
