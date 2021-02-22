import { Observable } from 'rxjs';
import { UserSocial } from './../../../models/user_social';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from 'src/app/models/store';

import {auth} from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import {User} from '@firebase/auth-types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  frm_register: FormGroup;
  frm_store: FormGroup;
  slides = false;
  formulario = true;

  storedto: Store = new Store();
  user: UserSocial = new UserSocial();
  usercredential: User;

  constructor(private auth: AngularFireAuth, private toastctr: ToastController) {
    this.frm_register = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'alias': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required)
    });

    this.frm_store = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'direccion': new FormControl('', Validators.required),
      'postcode': new FormControl('', Validators.required),
      'zipcode': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required),
      'user_id': new FormControl('', Validators.required),
      'categoria_id': new FormControl('', Validators.required),
    })
  }


  ngOnInit() {}

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


  // funcion para registrar un usuario sin SOCIAL-LOGIN
  registerUser() {

  }

  // Registrar con gmail
  registerWithGmail() {}

  // registrar con facebook
  registerWithFacebook() {
    this.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
      (result) => {
        const user = result.user;
        console.log(user.uid);
      }
    ).catch(
      (result) => {
        this.errorToast();
      }
    );
  }

}
