import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent {
  constructor(private router:Router){}
  chicken=[
    {
      "name":"chicken tikka",
      "price":"300",
      "restro":"taj",
      "pic":"../../assets/chicken1.jpg"
    },
    {
      "name":"butter chicken",
      "price":"450",
      "restro":"taj",
      "pic":"../../assets/chicken2.jpg"
    }
  
  ]
  order(){
  this.router.navigate(['/','order'])
  }
}

