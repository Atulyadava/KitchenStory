import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dosa',
  templateUrl: './dosa.component.html',
  styleUrls: ['./dosa.component.css']
})
export class DosaComponent {

  constructor(private router:Router){}
  dosa=[
    {
      "name":"masala dosa",
      "price":"200",
      "restro":"taj",
      "pic":"../../assets/dosa1.jpg"
    },
    {
      "name":"plane dosa",
      "price":"150",
      "restro":"taj",
      "pic":"../../assets/dosa2.jpg"
    }
  
  ]
  order(){
  this.router.navigate(['/','order'])
  }
}
