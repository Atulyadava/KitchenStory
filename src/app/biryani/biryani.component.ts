import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biryani',
  templateUrl: './biryani.component.html',
  styleUrls: ['./biryani.component.css']
})
export class BiryaniComponent {
  constructor(private router:Router){}
  biryani=[
    {
      "name":"chicken biryani",
      "price":"300",
      "restro":"taj",
      "pic":"../../assets/biryani1.jpg"
    },
    {
      "name":"chicken biryani",
      "price":"450",
      "restro":"taj",
      "pic":"../../assets/biryani2.jpg"
    }
  
  ]
  order(){
  this.router.navigate(['/','order'])
  }
}
