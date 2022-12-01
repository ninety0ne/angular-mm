import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MissingComponent } from './pages/missing/missing.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  //Public routes
  {
    path: '',
    title: 'MatrixMoestuin - Home',
    component: HomeComponent,
  },
  {
    path: 'signin',
    title: 'MatrixMoestuin - Sign in',
    component: SigninComponent,
  },
  {
    path: 'signup',
    title: 'MatrixMoestuin - Sign up',
    component: SignupComponent,
  },

  //Protected routes
  {
    path: 'dashboard',
    title: 'MatrixMoestuin - Dashboard',
    component: DashboardComponent,
  },

  //Wildcard route
  { path: '**', component: MissingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
