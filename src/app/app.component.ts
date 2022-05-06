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
    this.openPhy=false;
    this.openRear=false;
    this.openE32=false;
    this.openE56=false;
    this.openLoc=false;
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
    this.openRear=false;
    this.openE32=false;
    this.openE56=false;
    this.openLoc=false;
  }

  arrivalHandlerRear(){
    console.log("Rear");
    this.openRear=!this.openRear;
    this.openPhy=false;
    this.openE32=false;
    this.openE56=false;
    this.openLoc=false;
  }
  arrivalHandlerE56(){
    console.log("E56");
    this.openE56=!this.openE56;
    this.openPhy=false;
    this.openRear=false;
    this.openE32=false;
    this.openLoc=false;
  }
  arrivalHandlerE32(){
    console.log("E32");
    this.openE32=!this.openE32;
    this.openPhy=false;
    this.openRear=false;
    this.openE56=false;
    this.openLoc=false;
  }
  arrivalHandlerLoc(){
    console.log("Loc");
    this.openLoc=!this.openLoc;
    this.openPhy=false;
    this.openRear=false;
    this.openE32=false;
    this.openE56=false;
  }

  arrivalHandlerDeploy(){
    console.log("Dep");
    window.location.href="https://www.youtube.com/";
  }
  
  arrivalHandlerStorage(){
    console.log("Str");
    window.location.href="https://www.youtube.com/";
  }

  arrivalHandlerShip(){
    console.log("Ship");
    window.location.href="https://www.youtube.com/";
  }

  arrivalHandlerPCB(){
    console.log("Dep");
    window.location.href="https://www.youtube.com/";
  }
  
  arrivalHandlerSOPRear(){
    console.log("Str");
    window.location.href="https://www.youtube.com/";
  }

  arrivalHandlerSOPE32(){
    console.log("Ship");
    window.location.href="https://www.youtube.com/";
  }

  arrivalHandlerSOPE56(){
    console.log("Str");
    window.location.href="https://www.youtube.com/";
  }

  arrivalHandlerSOPLoc(){
    console.log("Ship");
    window.location.href="https://www.youtube.com/";
  }
}
