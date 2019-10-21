import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdisplayComponent } from './userdisplay.component';
import { userrouting } from './user.routing';
import { EdituserComponent } from './edituser/edituser.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations:[
    UserdisplayComponent,
    EdituserComponent,
    SignupComponent,


  ],
  imports:[CommonModule,FormsModule,userrouting,ReactiveFormsModule]
})

export class UserModule{}
