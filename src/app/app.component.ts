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
  openNext2:boolean=false;
  openNext3:boolean=false;

  arrivalHandler(){
    console.log("Hii");
    this.openNext=true;
  }
  
  arrivalHandler1(){
    console.log("Hii1");
   
    this.openNext1=!this.openNext1;
    this.openNext3=false;
  }

  arrivalHandler2(){
    console.log("Hii2");
    
    this.openNext2=!this.openNext2;

  }

  arrivalHandler3(){
    console.log("Hii3");
    this.openNext3=!this.openNext3;
    this.openNext1=this.openNext2=false;
  }
}
