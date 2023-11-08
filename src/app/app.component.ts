import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // we have used element sleector this is entry point.
  templateUrl: './app.component.html',  // this template
  styleUrls: ['./app.component.css']    // style  
})
export class AppComponent {
  title = 'todo list';
  constructor(){
    // setTimeout(() => {
    //   this.title ="title changed"
    // }, 2000);


  }
}
