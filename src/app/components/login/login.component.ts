import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string = '';
  loginForm = new FormGroup({
    email:new FormControl (null, [Validators.email, Validators.required]),
    password:new FormControl (null, [Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')])
  })


  constructor(private AuthService:AuthService, private router:Router) { }

  submitloginForm(loginForm:FormGroup){
    this.AuthService.login(loginForm.value).subscribe((res)=>{
      if (res.message == 'success') {
           localStorage.setItem('usertoken',res.token);
           this.AuthService.savecurrentuser();
          this.router.navigate(['/home'])
          console.log(res);
      }else{
         this.error = res.message
      }
    })
  }


  ngOnInit(): void {
  }

}
