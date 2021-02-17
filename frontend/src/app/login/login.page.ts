import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  loginWithFacebook() {
    this.authservice.loginWithFacebook();
  }

}
