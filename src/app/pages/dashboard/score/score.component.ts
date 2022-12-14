import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthHandlerService } from 'src/app/core/auth/auth-handler.service';
import { UserDataService } from 'src/app/core/data/user-data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  public userObserver: Observable<User>;
  scoreForm: FormGroup;

  constructor(
    private userData: UserDataService,
    private formBuilder: FormBuilder,
    private authService: AuthHandlerService
  ) {}

  ngOnInit(): void {
    this.userObserver = this.userData.GetUserData();

    this.scoreForm = this.formBuilder.group({
      Score: '',
    });
  }

  updateScore() {
    this.authService.SendUserScore(this.scoreForm.getRawValue());
  }
}
