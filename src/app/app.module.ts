import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import{ AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// import { SettingComponent } from './setting/setting.component';


var firebaseConfig = {
    apiKey: "AIzaSyBrLJ6FDtpJfONimqYWEoNkwbbJP9suKog",
    authDomain: "twitter-feed-adf7d.firebaseapp.com",
    databaseURL: "https://twitter-feed-adf7d.firebaseio.com",
    projectId: "twitter-feed-adf7d",
    storageBucket: "twitter-feed-adf7d.appspot.com",
    messagingSenderId: "314079670922"
  };
@NgModule({
  declarations: [
    AppComponent,   
    SideMenuComponent, AuthenticationComponent, 
    // SettingComponent,
    
    
   
  ],
  imports: [
    CollapseModule,
    BrowserModule,
    ReactiveFormsModule,
     HttpModule,
    //RouterModule.forRoot([{ path: "", component: AuthenticationComponent}]),
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
