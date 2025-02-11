import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  passHiden = true;
  passType = 'password';

  eyeClicked(){

    this.passHiden = !this.passHiden;
    this.passType = this.passHiden? 'password':'text';


  }
}
