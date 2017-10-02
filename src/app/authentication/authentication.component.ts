import { Component, OnInit,EventEmitter,Output} from '@angular/core';
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
  
public user: any;
@Output() onLogin:EventEmitter<object> = new EventEmitter<object>();
@Output() onLogOut:EventEmitter<object> = new EventEmitter<object>();
  constructor(private formBuilder: FormBuilder,public afAuth: AngularFireAuth) { 
     this.userForm = this.formBuilder.group({
     
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(5)]]
    });
    // this.user = afAuth.authState;
    this.afAuth.auth.onAuthStateChanged(user=>{
      if(user){
        this.user = user;
        this.onLogin.emit(user);

      }
    })
  }

  ngOnInit() {
  }

  googleLogin():void {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then( () => {
      firebase.auth().getRedirectResult().then( result => {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log(result);

      }).catch(function(error) {
        // Handle Errors here.
        console.log(error.message);
      });
    });
  }
  // for signup
  emailSignUp() {
    let email = this.userForm.value.email;
    let password = this.userForm.value.password;
    if (this.userForm.dirty && this.userForm.valid) {
     // alert(`Email: ${this.userForm.value.email} Password: ${this.userForm.value.password}`);
          return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then((user) => {
           console.log(user);
           this.user = user
         })
          .catch(error => alert(error));
         }
         }

    //for login
    emailLogin() {
       let email = this.userForm.value.email;
       let password = this.userForm.value.password;
       if (this.userForm.dirty && this.userForm.valid) {
       return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.user = user;
         this.onLogin.emit(user);
        //this.updateUserData()
      })
      .catch(error => alert(error));
      }
      }

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

   resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }

}
