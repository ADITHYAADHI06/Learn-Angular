import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages:Array<any>=[]

  constructor() {
    this.init();
   }

  init():void{
    this.insertMsg({Fname:"aaaaaa",Lname:"jhhg",discribtion: "kkhh"});
    this.insertMsg({Fname:"bbbb",Lname:"jhhg",discribtion: "kkhh"});
    this.insertMsg({Fname:"ccccc",Lname:"jhhg",discribtion: "kkhh"});
  }
  
  insertMsg(message:{Fname:String,Lname:String, discribtion:String }):void{
   this.messages.push(message);
  }

  getAllMsg(){
    return this.messages;
  }

  deleteMsg(index:number):void{
    this.messages.splice(index,1);
  }
 
}
