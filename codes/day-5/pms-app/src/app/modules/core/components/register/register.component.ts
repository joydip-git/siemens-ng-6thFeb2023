import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // registrationForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl('')
  // })

  registrationForm?: FormGroup;

  constructor(private builder: FormBuilder) {
    this.registrationForm = this.builder.group({
      username: [''],
      password: ['']
    })
  }
  submit() {
    // console.log(this.registrationForm?.get('username')?.value)
    const registeredUser = <User>this.registrationForm?.value
  }
}
