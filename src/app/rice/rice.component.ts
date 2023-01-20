import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styleUrls: ['./rice.component.css']
})
export class RiceComponent {
  constructor(private router:Router){}
  rice=[
    {
      "name":"fish curry",
      "price":"100",
      "restro":"taj",
      "pic":"../../assets/rice1.jpg"
    },
    {
      "name":"fryed fish",
      "price":"150",
      "restro":"taj",
      "pic":"../../assets/rice2.jpg"
    }
  
  ]
  order(){
  this.router.navigate(['/','order'])
  }
}

