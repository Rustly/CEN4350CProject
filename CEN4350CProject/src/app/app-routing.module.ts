import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component'
import { HomepagebodyComponent } from './homepagebody/homepagebody.component'
import { RequestpageComponent } from './requestpage/requestpage.component'
import { PetsitterspageComponent } from './petsitterspage/petsitterspage.component'
import { ReviewpageComponent } from './reviewpage/reviewpage.component'
import { AccountpageComponent } from './accountpage/accountpage.component'

const routes: Routes = [
  {
    path: '',
    component: HomepagebodyComponent,
  },
  {
    path: 'loginpage',
    component: LoginpageComponent,
  },
  {
    path: 'requestpage',
    component: RequestpageComponent,
  },
  {
    path: 'reviewpage',
    component: ReviewpageComponent
  },
  {
    path: 'petsitters',
    component: PetsitterspageComponent
  },
  {
    path: 'account',
    component: AccountpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
