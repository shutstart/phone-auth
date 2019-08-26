import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {environment} from './../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthhService {
  windowRef:any
  constructor(private afAuth:AngularFireAuth) { 
    firebase.initializeApp(environment.firebase);
    this.windowRef = window
    
  }
  signInWithPhone(num){
    const appVerifier = this.windowRef.recaptchaVerifier;
    return firebase.auth().signInWithPhoneNumber(num, appVerifier)
  }
  varifyOTP(otp){
    return this.windowRef.confirmationResult.confirm(otp)
  }
  signInWithGoogle(){
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  signInWithEmail(email:string,password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password)
  }
  signUpWithEmail(email,password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
  }
  sendForgotPasswordLink(email){
    return this.afAuth.auth.sendPasswordResetEmail(email)
  }
  logOut(){
    this.afAuth.auth.signOut()
    window.location.reload()
  }
}
