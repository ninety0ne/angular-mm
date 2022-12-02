import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MissingComponent } from './pages/missing/missing.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserAuthenticatedGuard } from './core/guards/user-authenticated.guard';
import { IsSignedInGuard } from './core/guards/is-signed-in.guard';
import { AuthHandlerComponent } from './auth/auth-handler/auth-handler.component';

//Dashboard components
import { PlantsComponent } from './pages/dashboard/plants/plants.component';
import { InsightsComponent } from './pages/dashboard/insights/insights.component';
import { NotificationsComponent } from './pages/dashboard/notifications/notifications.component';

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
    canActivate: [IsSignedInGuard],
  },
  {
    path: 'signup',
    title: 'MatrixMoestuin - Sign up',
    component: SignupComponent,
    canActivate: [IsSignedInGuard],
  },

  //Protected routes
  {
    path: 'dashboard',
    title: 'MatrixMoestuin - Dashboard',
    component: DashboardComponent,
    canActivate: [UserAuthenticatedGuard],
  },
  {
    path: 'dashboard/plants',
    title: 'MatrixMoestuin - Planten',
    component: PlantsComponent,
    canActivate: [UserAuthenticatedGuard],
  },
  {
    path: 'dashboard/insights',
    title: 'MatrixMoestuin - Planten',
    component: InsightsComponent,
    canActivate: [UserAuthenticatedGuard],
  },
  {
    path: 'dashboard/notifications',
    title: 'MatrixMoestuin - Planten',
    component: NotificationsComponent,
    canActivate: [UserAuthenticatedGuard],
  },

  //Wildcard route
  { path: '**', component: MissingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthHandlerComponent],
})
export class AppRoutingModule {}
