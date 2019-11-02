import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userImg = 'assets/images/background.png';
  logoImg = 'assets/images/second_logo.png';

  loginFrm: boolean;

  constructor(private router: Router,) { }

  ngOnInit() {
    this.loginFrm = false
  }

  gotohome(){
    this.router.navigate(['/home']);
  }

}
