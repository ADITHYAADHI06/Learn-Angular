import { Component,inject } from '@angular/core';
import {MyFirstService} from "../services/my-first.service"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   
  Fname:string="";
  Lname:string="";
  discribtion:string=""
  isFormSubmitted:boolean=false;
  msgs: Array<any> = [];
  // private service: MyFirstService =inject(MyFirstService)   // property injection

  constructor(
    private service: MyFirstService   // constructor injection
  ){
        this.msgs = this.service.getAllMsg();
        this.isFormSubmitted=true;
  }


  OnSubmit(){
   this.isFormSubmitted=true;
   
  //  this.msgs.push( 
  //   { 
  //     "Fname":this.Fname,
  //     "Lname":this.Lname, 
  //     "discribtion":this.msg 
  //   })

  // with service 
  this.service.insertMsg( 
    { 
      "Fname":this.Fname,
      "Lname":this.Lname, 
      "discribtion":this.discribtion 
    })


  }

  // deleteMsg(index:number){
  //   this.msgs.splice(index,1);
  // }

  // with service
  deleteMsg(index:number){
    this.service.deleteMsg(index);
  }

 
}
