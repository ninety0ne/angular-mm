import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthHandlerService } from 'src/app/core/auth/auth-handler.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private authService: AuthHandlerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({ UserName: '', Password: '' });
  }

  SignIn() {
    this.authService.SignIn(this.signInForm.getRawValue());
  }
}
