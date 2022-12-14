import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthHandlerService } from 'src/app/core/auth/auth-handler.service';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  md5 = new Md5();

  constructor(
    private authService: AuthHandlerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email, Validators.min(1)]],
    });
  }

  SignUp() {
    this.authService.SignUp(this.signUpForm.getRawValue());
  }
}
