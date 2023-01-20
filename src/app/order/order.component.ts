import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
constructor(private router:Router){

}
msg:any=""
  complete(name:any,phone:any,payment:any){
    if(name!=null && name!="" && phone!=null && phone!="" &&payment!=null && payment!=""){
      this.router.navigate(['/','done'])
    }
else{
this.msg="please enter requried Information";
}
  }
}
