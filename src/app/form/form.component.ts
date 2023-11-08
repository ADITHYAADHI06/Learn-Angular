import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   
  name:string="";
  password:string="";
  isFormSubmitted:boolean=false;
  msgs: Array<any> = [];

  OnSubmit(){
   this.isFormSubmitted=true;
   this.msgs.push( {"name":this.name, "password":this.password })
  }
}
