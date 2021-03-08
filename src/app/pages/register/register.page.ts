import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email:string;
  pass:string;
  name:string;

  constructor(private auth:AuthService, public router:Router) {}

  ngOnInit() {
  }


  onSubmitSignUp(){

    
    this.auth.singup(this.email,this.pass).then(res=>{
      this.router.navigate(['tabs']);

    }).catch(err=> alert('Datos son incorrectos'))
}

}
