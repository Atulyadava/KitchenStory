import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent {
  constructor(private router:Router){}
  fish=[
    {
      "name":"fish curry",
      "price":"300",
      "restro":"taj",
      "pic":"../../assets/fish1.jpg"
    },
    {
      "name":"fryed fish",
      "price":"450",
      "restro":"taj",
      "pic":"../../assets/fish2.jpg"
    }
  
  ]
  order(){
  this.router.navigate(['/','order'])
  }
}
