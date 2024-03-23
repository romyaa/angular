import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './details/details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { SignupComponent } from './singup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

{
    path: "" ,
    component :ProductListComponent,
    title : "romyaa"
},
{
    path: "details/:Game_id" ,
    component :DetailsComponent,
    title : "Details"

},
{
    path: "contact-us" ,
    component :ContactUsComponent,
    title : "Contact_Us"

},
{
    path: "signin" ,
    component :SignupComponent,
    title : "signin"

},
{
    path: "login" ,
    component :LoginComponent,
    title : "login"

},





];
