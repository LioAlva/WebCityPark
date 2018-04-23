import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';

//import { BrowserModule } from '@anglar/platform-browser';
//import { FormsModule } from '@angular/forms';//luis

@NgModule({
  imports: [ PagesRoutingModule ],
    declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
   
  ]
})
export class PagesModule { }


//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@anglar/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   imports: [BrowserModule, ReactiveFormsModule],
//   declarations: [AppComponent],
//   bootstrap: [AppComponent]
// })