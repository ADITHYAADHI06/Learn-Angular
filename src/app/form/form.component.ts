import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   
  Fname:string="";
  Lname:string="";
  msg:string=""
  isFormSubmitted:boolean=false;
  msgs: Array<any> = [];



  OnSubmit(){
   this.isFormSubmitted=true;
   
   this.msgs.push( 
    { 
      "Fname":this.Fname,
      "Lname":this.Lname, 
      "msg":this.msg 
    }
    )
  }

  deleteMsg(index:number){
    this.msgs.splice(index,1);
  }



  
}
