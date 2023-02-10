import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // username = ''
  // password = ''
  //submit(frm: NgForm) {
  submit(value: any) {
    const loggedInUser = <User>value
    console.log(loggedInUser)
    //console.log(this.username, this.password)
  }
}
