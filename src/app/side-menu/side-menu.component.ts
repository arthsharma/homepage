import { Component, OnInit , ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
// import { Router, NavigationStart, NavigationExtras } from '@angular/router';
// declare var google: any;

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    
@Output() onLogOut:EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }
logOut(){
    this.onLogOut.emit(null);
}

}

  
   
