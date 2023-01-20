import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){

  }
  login(uname:any,upass:any){
 if(uname=="atul" && upass=="atul"){
  this.router.navigate(['/','home'])
 }
  }

  changePass(){
    console.log("hello")
  }
}
