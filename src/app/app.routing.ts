import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';




const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},

  // {path:'users',loadChildren:'./users/users.module#UsersModule'},

];

export const routing=RouterModule.forRoot(arr);
