import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepagebodyComponent } from './homepagebody/homepagebody.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RequestpageComponent } from './requestpage/requestpage.component';
import { ReviewpageComponent } from './reviewpage/reviewpage.component';
import { PetsitterspageComponent } from './petsitterspage/petsitterspage.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { PetsitterdetailsComponent } from './petsitterdetails/petsitterdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepagebodyComponent,
    LoginpageComponent,
    RequestpageComponent,
    ReviewpageComponent,
    PetsitterspageComponent,
    AccountpageComponent,
    PetsitterdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
