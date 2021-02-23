import { RegisterComponent } from './register/register.component';

import { Component, OnInit } from '@angular/core';
import {auth} from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(private auth: AngularFireAuth,
    private toastctr: ToastController, private modalctrl: ModalController,
    private afs: AngularFirestore) {


    }

  ngOnInit() {
    let userDoc = this.afs.firestore.collection('users');
      userDoc.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
              console.log(doc.id, "=>", doc.data());
        })
      });
  }

  loginWithFacebook() {
    this.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
        (result) => {
          const u = result.additionalUserInfo;
          console.log(u.isNewUser);
          if(u.isNewUser === true) {
            this.noAccount();
            this.auth.signInWithEmailAndPassword("danielmiraflores88@gmail.com", "")
          .then(function (info) {
            var user = this.auth.currentUser;
            user.delete();
          });

          } else {
            this.successToast();
          }

        }
      ).catch(
        (result) => {
          this.errorToast();
        }
      );
  }

  // toast para alertar al usuario que debera registrarse porque no posee cuenta con nuestra app
  async noAccount() {
    const toast = await this.toastctr.create({
      message: 'Actualmente no posees una cuenta, te invitamos a registrarte',
      duration: 3000,
      position: 'bottom',
      color: 'warning'

    });
    toast.present();
  }

  loginWithGmail() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      () => {
        (result) => {
          this.successToast();
        }
      }
    ).catch(
      () => {
        (result) => {
          this.errorToast();
        }
      }
    );
  }

  async successToast() {
    const toast = await this.toastctr.create({
      message: 'Validacion exitosa de credenciales',
      duration: 2000,
      position: 'bottom',
      color: 'success'

    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastctr.create({
      message: 'Error al validar credenciales',
      duration: 2000,
      position: 'bottom',
      color: 'danger'

    });
    toast.present();
  }

  async modalRegister() {
    const modal = await this.modalctrl.create({
      component: RegisterComponent,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }

  registerPage(){
    this.modalRegister();
  }

}
