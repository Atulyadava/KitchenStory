import { Component, OnInit } from '@angular/core';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit{
  constructor(private serv:MyservService){

  }
  ngOnInit(): void {
    
  }
msg:any;
  changed(newPass:any, username:any){
    console.log("hello")
    this.serv.changepassword(username,newPass).subscribe(data=>{
this.msg="your password is changed"
    })
   
  }
}
