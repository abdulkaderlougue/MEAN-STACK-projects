import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './home/home.component';
import { AppointmentListComponent } from './users/appointment-list/appointment-list.component';
import { CoachListComponent } from './users/coach-list/coach-list.component';
import { BookAppointmentComponent } from './users/book-appointment/book-appointment.component';
import { BookingDetailComponent } from './users/booking-detail/booking-detail.component';
import { CoachDetailComponent } from './users/coach-detail/coach-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AppointmentListComponent,
    CoachListComponent,
    BookAppointmentComponent,
    BookingDetailComponent,
    CoachDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
