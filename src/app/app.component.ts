import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  openNext=false;
  openNext1:boolean=false;
  
  arrivalHandler(){
    console.log("Hii");
    this.openNext=true;
  }
  arrivalHandler1(){
    console.log("Hii");
    this.openNext1=true;
  }
}
