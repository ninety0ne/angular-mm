import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MissingComponent } from './pages/missing/missing.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserAuthenticatedGuard } from './core/guards/user-authenticated.guard';
import { IsSignedInGuard } from './core/guards/is-signed-in.guard';

//Dashboard components
import { DashboardContentComponent } from './pages/dashboard/dashboard-content/dashboard-content.component';
import { PlantsComponent } from './pages/dashboard/plants/plants.component';
import { InsightsComponent } from './pages/dashboard/insights/insights.component';
import { NotificationsComponent } from './pages/dashboard/notifications/notifications.component';
import { TipsComponent } from './pages/dashboard/tips/tips.component';
import { IrrigerenComponent } from './pages/dashboard/irrigeren/irrigeren.component';
import { StatusComponent } from './pages/dashboard/status/status.component';
import { AccountComponent } from './pages/dashboard/account/account.component';
import { ScoreComponent } from './pages/dashboard/score/score.component';

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
    component: DashboardComponent,
    canActivate: [UserAuthenticatedGuard],
    children: [
      {
        path: '',
        title: 'MatrixMoestuin - Dashboard',
        component: DashboardContentComponent,
        canActivate: [UserAuthenticatedGuard],
        data: { breadcrumb: { alias: 'dashboard' } },
      },
      {
        path: 'plants',
        title: 'MatrixMoestuin - Planten',
        component: PlantsComponent,
        canActivate: [UserAuthenticatedGuard],
        data: { breadcrumb: { alias: 'plants' } },
      },
      {
        path: 'insights',
        title: 'MatrixMoestuin - Inzichten',
        component: InsightsComponent,
        canActivate: [UserAuthenticatedGuard],
        data: { breadcrumb: { alias: 'insights' } },
      },
      {
        path: 'notifications',
        title: 'MatrixMoestuin - Notificaties',
        component: NotificationsComponent,
        canActivate: [UserAuthenticatedGuard],
        data: { breadcrumb: { alias: 'notifications' } },
      },
      {
        path: 'tips',
        title: 'MatrixMoestuin - Tips',
        component: TipsComponent,
        canActivate: [UserAuthenticatedGuard],
        data: { breadcrumb: { alias: 'tips' } },
      },
      {
        path: 'irrigeren',
        title: 'MatrixMoestuin - Irrigeren',
        component: IrrigerenComponent,
        canActivate: [UserAuthenticatedGuard],
        data: { breadcrumb: { alias: 'irrigeren' } },
      },
      {
        path: 'status',
        title: 'MatrixMoestuin - Status',
        component: StatusComponent,
        canActivate: [UserAuthenticatedGuard],
        data: { breadcrumb: { alias: 'status' } },
      },
      {
        path: 'settings',
        title: 'MatrixMoestuin - Instellingen',
        component: MissingComponent,
        canActivate: [UserAuthenticatedGuard],
        data: { breadcrumb: { alias: 'settings' } },
      },
      {
        path: 'account',
        title: 'MatrixMoestuin - Account',
        component: AccountComponent,
        canActivate: [UserAuthenticatedGuard],
        data: { breadcrumb: { alias: 'account' } },
      },
      {
        path: 'score',
        title: 'MatrixMoestuin - Score',
        component: ScoreComponent,
        canActivate: [UserAuthenticatedGuard],
        data: { breadcrumb: { alias: 'score' } },
      },
      { path: '**', component: MissingComponent },
    ],
  },

  //Wildcard route
  { path: '**', component: MissingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
