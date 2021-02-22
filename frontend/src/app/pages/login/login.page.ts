import { RegisterComponent } from './register/register.component';

import { Component, OnInit } from '@angular/core';
import {auth} from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AngularFireAuth,
    private toastctr: ToastController, private modalctrl: ModalController) { }

  ngOnInit() {
  }

  loginWithFacebook() {
    this.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
        (result) => {
          this.successToast();
        }
      ).catch(
        (result) => {
          this.errorToast();
        }
      );
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
