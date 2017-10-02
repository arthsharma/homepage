import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import{ AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
// import { SettingComponent } from './setting/setting.component';


const firebaseConfig = {
    apiKey: "AIzaSyCRdb6w8MwW6fuAZmspRZUUg8NJxxVmzbs",
    authDomain: "assignment-7765c.firebaseapp.com",
    databaseURL: "https://assignment-7765c.firebaseio.com",
    projectId: "assignment-7765c",
    storageBucket: "",
    messagingSenderId: "1089810418430"
  };

@NgModule({
  declarations: [
    AppComponent,   
    SideMenuComponent, AuthenticationComponent 
    // SettingComponent,
    
    
   
  ],
  imports: [
    CollapseModule,
    BrowserModule,
    ReactiveFormsModule,
    //RouterModule.forRoot([{ path: "", component: AuthenticationComponent}]),
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7wXnA6AbXCCOjowP7pJ0BoFl75-6_L0w'
    })
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
