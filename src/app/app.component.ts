import { Component,EventEmitter,Output,ViewChild } from '@angular/core';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   @ViewChild(AuthenticationComponent)
  private authenticationComponent: AuthenticationComponent;
   isLoggedIn:boolean = false;
  title = 'app';
  lat: number=0 ;
  lng: number=0 ;
  location:any;
  renderHome(event){
    this.isLoggedIn = true;
  }
  
  
  ngOnInit(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
         this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      });
      };
    
  }
logOut(event){
  //console.log("hi");
  this.isLoggedIn=false;
  console.log(this.isLoggedIn);
    this.authenticationComponent.logOut();
     
    
}
}

