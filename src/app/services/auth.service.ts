import { Injectable } from '@angular/core';
//import { FirebaseApp } from '@angular/fire';

import { AngularFireAuth } from "@angular/fire/auth";
//import { GooglePlus } from "@ionic-native/google-plus/ngx";
//import * as firebase from 'firebase';
import { HttpClientModule } from "@angular/common/http";
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

//import { JwtHelperService } from "@auth0/angular-jwt";


//const helper= new JwtHelperService();
//const TOKEN_KEY='jwt-token'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
// private google: GooglePlus,
  constructor(private Afauth: AngularFireAuth,private http: HttpClientModule,private plt:Platform, private router:Router) { }

  login(email: string, pass: string) {

    return new Promise((resolve, rejected) => {
      this.Afauth.signInWithEmailAndPassword(email, pass).then(user =>
        resolve(user)
      ).catch(err => rejected(err));


    })


    
  }  

  singup(email: string, pass: string){
    return new Promise((resolve, rejected) => {
      this.Afauth.createUserWithEmailAndPassword(email, pass).then(user =>
        resolve(user)
      ).catch(err => rejected(err));


    })

  }
  logout(){
    this.Afauth.signOut()
      
  }

 
 /**
  * 
  * loginGoogle(){

    
    return this.google.login({}).then(res => {
      const user_data_google = res;
      return this.Afauth.signInWithCredential(user_data_google.accesToken);
      //auth.GoogleAuthProvider.credential(null,user_data_google.accesToken)
    })
      
    

  }
  *  */ 
  


}

