import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MissingComponent } from './pages/missing/missing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashnavComponent } from './components/dashnav/dashnav.component';
import { PlantsComponent } from './pages/dashboard/plants/plants.component';
import { InsightsComponent } from './pages/dashboard/insights/insights.component';
import { NotificationsComponent } from './pages/dashboard/notifications/notifications.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DashboardContentComponent } from './pages/dashboard/dashboard-content/dashboard-content.component';
import { TipsComponent } from './pages/dashboard/tips/tips.component';
import { IrrigerenComponent } from './pages/dashboard/irrigeren/irrigeren.component';
import { StatusComponent } from './pages/dashboard/status/status.component';
import { AccountComponent } from './pages/dashboard/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    MissingComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    DashnavComponent,
    PlantsComponent,
    InsightsComponent,
    NotificationsComponent,
    BreadcrumbComponent,
    DashboardContentComponent,
    TipsComponent,
    IrrigerenComponent,
    StatusComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
