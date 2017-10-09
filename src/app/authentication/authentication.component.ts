import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { Http } from '@angular/http';
import{ AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { FormBuilder, Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  userForm: any;
  public isLoginForm:boolean=true;
   tweets = [];
public user: any;
@Output() onLogin:EventEmitter<object> = new EventEmitter<object>();
@Output() onLogOut:EventEmitter<object> = new EventEmitter<object>();
public token: any;
public secret: any;
  constructor(private formBuilder: FormBuilder,public afAuth: AngularFireAuth,private http: Http) { 
  
     this.user = afAuth.authState;
    this.afAuth.auth.onAuthStateChanged(user=>{
      console.log(user);
      if(user){
        this.user = user;
       // alert(user);
        // http.get('https://api.twitter.com/1.1/statuses/user_timeline.json',{params: {api_key: 'JHPP2IdFKmw8igjDyLj1XnKCH' }}).subscribe
        // (
        //   (response) => (response.json()),
        //   (error) =>(error.json())
        // )
        
        
        
         this.onLogin.emit(user);

      }
  

    })
  }

  ngOnInit() {
  }

  twitterlogin():void {
    const provider = new firebase.auth.TwitterAuthProvider();
   firebase.auth().signInWithRedirect(provider);
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    this.token= result.credential.accessToken;
    this.secret = result.credential.secret;
    console.log(result);
    alert(JSON.stringify(result));
    // ...
  }
  // The signed-in user info.
 // var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // // The email of the user's account used.
  // var email = error.email;
  // // The firebase.auth.AuthCredential type that was used.
  // var credential = error.credential;
  // ...
});

    
  }

  
  // for signup
  // emailSignUp() {
  //   let email = this.userForm.value.email;
  //   let password = this.userForm.value.password;
  //   if (this.userForm.dirty && this.userForm.valid) {
  //    // alert(`Email: ${this.userForm.value.email} Password: ${this.userForm.value.password}`);
  //         return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //         .then((user) => {
  //          console.log(user);
  //          this.user = user
  //        })
  //         .catch(error => alert(error));
  //        }
  //        }

  //   //for login
  //   emailLogin() {
  //      let email = this.userForm.value.email;
  //      let password = this.userForm.value.password;
  //      if (this.userForm.dirty && this.userForm.valid) {
  //      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       this.user = user;
  //        this.onLogin.emit(user);
  //       //this.updateUserData()
  //     })
  //     .catch(error => alert(error));
  //     }
  //     }

//for logout
  logOut(){
 // console.log("bye");
   return this.afAuth.auth.signOut();
   }
  toggleLoginForm(){
    this.isLoginForm= !this.isLoginForm;
  }
// const formValueChanges = this.form.controls["password"].formValueChanges
//   forgetPassword(){
//     if(this.userForm.value.password === ){

//     }
  // }

  //  resetPassword(email: string) {
  //   var auth = firebase.auth();
  //   return auth.sendPasswordResetEmail(email)
  //     .then(() => console.log("email sent"))
  //     .catch((error) => console.log(error))
  // }

}
