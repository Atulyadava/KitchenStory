import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-egg',
  templateUrl: './egg.component.html',
  styleUrls: ['./egg.component.css']
})
export class EggComponent {
  constructor(private router:Router){}
  egg=[
    {
      "name":"egg curry",
      "price":"200",
      "restro":"taj",
      "pic":"../../assets/egg1.webp"
    },
    {
      "name":"egg currry",
      "price":"150",
      "restro":"taj",
      "pic":"../../assets/egg2.jpg"
    }
  
  ]
  order(){
  this.router.navigate(['/','order'])
  }
}
