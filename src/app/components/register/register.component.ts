import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error:string= '';

  registerForm  = new FormGroup({
    first_name : new FormControl(null , [Validators.pattern('^[a-z]{3,10}$') , Validators.minLength(3) , Validators.maxLength(10) , Validators.required]),
    last_name : new FormControl(null , [Validators.minLength(3) , Validators.maxLength(10) , Validators.required]),
    age : new FormControl(null , [Validators.required , Validators.min(16) , Validators.max(80)]),
    password : new FormControl(null , [Validators.required , Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
    email : new FormControl(null , [Validators.email , Validators.required ]),

  });

  constructor(private AuthService:AuthService, private router:Router) { }


  submitRegisterForm(registerForm:FormGroup){
     this.AuthService.register(registerForm.value).subscribe((res)=>{
       if (res.message == 'success') {
           this.router.navigate(['/login'])
       }else{
         this.error = res.errors.email.message
       }
     })
  }


  ngOnInit(): void {
  }

}
