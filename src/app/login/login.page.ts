import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userImg = 'assets/images/background.png';
  loginFrm: boolean;

  constructor() { }

  ngOnInit() {
    this.loginFrm = false
  }

}
