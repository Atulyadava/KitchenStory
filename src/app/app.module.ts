import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { FishComponent } from './fish/fish.component';
import { EggComponent } from './egg/egg.component';
import { ChickenComponent } from './chicken/chicken.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { DosaComponent } from './dosa/dosa.component';
import { RiceComponent } from './rice/rice.component';
import { OrderComponent } from './order/order.component';
import { DoneComponent } from './done/done.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AboutusComponent,
    HomeComponent,
    FishComponent,
    EggComponent,
    ChickenComponent,
    BiryaniComponent,
    DosaComponent,
    RiceComponent,
    OrderComponent,
    DoneComponent,
    ChangepassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
