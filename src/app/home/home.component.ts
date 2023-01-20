import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){

  }
  
myfood(food:any){
  console.log(food)
if(food=="fish"){
this.router.navigate(['/','fish'])
}
if(food=="egg"){
  this.router.navigate(['/','egg'])
}
if(food=="dosa"){
  this.router.navigate(['/','dosa'])
}
if(food=="rice"){
  this.router.navigate(['/','rice'])
}
if(food=="chicken"){
  this.router.navigate(['/','chicken'])
}
if(food=="biryani"){
  this.router.navigate(['/','biryani'])
}
}
}

