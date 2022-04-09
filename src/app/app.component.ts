import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  openNext=false;
  openDiagnois:boolean=false;
  openRepair:boolean=false;
  openIOT:boolean=false;
  openPhy:boolean=false;
  openRear:boolean=false;
  openE32:boolean=false;
  openE56:boolean=false;
  openLoc:boolean=false;

  arrivalHandler(){
    console.log("Hii");
    this.openNext=true;
  }
  
  arrivalHandlerDiagnois(){
    console.log("diag");
   
    this.openDiagnois=!this.openDiagnois;
    this.openIOT=false;
  }

  arrivalHandlerRepair(){
    console.log("Repair");
    
    this.openRepair=!this.openRepair;

  }

  arrivalHandlerIOT(){
    console.log("IOT");
    this.openIOT=!this.openIOT;
    this.openDiagnois=this.openRepair=false;
  }

  arrivalHandlerPhy(){
    console.log("Phy");
    this.openPhy=!this.openPhy;
  }

  arrivalHandlerRear(){
    console.log("Rear");
    this.openRear=!this.openRear;
  }
  arrivalHandlerE56(){
    console.log("E56");
    this.openE56=!this.openE56;
  }
  arrivalHandlerE32(){
    console.log("E32");
    this.openE32=!this.openE32;
  }
  arrivalHandlerLoc(){
    console.log("Loc");
    this.openLoc=!this.openLoc;
  }

  arrivalHandlerDeploy(){
    console.log("Dep");
    window.location.href="https://www.youtube.com/";
  }
}
