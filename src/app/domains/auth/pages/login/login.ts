import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { LoginForm } from '../../../../core/models/forms/login';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export default class Login {
  // loginForm: FormGroup<LoginForm>;

  // private authService = inject(AuthService)

  // constructor(private fb: FormBuilder) {
  //   this.loginForm = this.fb.group({
  //     username: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required]],
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     this.authService.login
  //   }
  // }


  // get formValues() {
  //   return {
  //     username: this.loginForm.controls.username.value,
  //     password: this.loginForm.controls.password.value,
  //   };
  // }
}
