import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{3,}'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}'),
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{3,}'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{8,}'),
      ]),
      Cpassword: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{8,}'),
      ]),
    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
