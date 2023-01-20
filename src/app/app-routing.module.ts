import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { ChickenComponent } from './chicken/chicken.component';
import { DoneComponent } from './done/done.component';
import { DosaComponent } from './dosa/dosa.component';
import { EggComponent } from './egg/egg.component';
import { FishComponent } from './fish/fish.component';
import { HomeComponent } from './home/home.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RiceComponent } from './rice/rice.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'changepass',
    component:ChangepassComponent
  },
  {
    path:'done',
    component:DoneComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
  {
    path:'fish',
    component:FishComponent
  },
  {
    path:'egg',
    component:EggComponent
  },
  {
    path:'dosa',
    component:DosaComponent
  },
  {
    path:'chicken',
    component:ChickenComponent
  },
  {
    path:'biryani',
    component:BiryaniComponent
  },
  {
    path:'rice',
    component:RiceComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {path:'',
  component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
