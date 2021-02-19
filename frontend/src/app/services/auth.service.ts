import { Injectable } from '@angular/core';
import {auth} from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  loginWithFacebook() {
    this.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(

    ).catch(

    );
  }

  loginWithGmail() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      () => {
        alert('funciona');
      }
    ).catch(
      () => {
        alert('error');
      }
    );
  }
}
