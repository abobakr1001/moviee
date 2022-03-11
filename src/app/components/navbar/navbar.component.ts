import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false;

  constructor(private auth:AuthService) {
    auth.currentUser.subscribe(()=>{
      if (auth.currentUser.getValue() != null) {
          this.isLogin = true
      }else{
        this.isLogin = false
      }
    })
  }

  ngOnInit(): void {

  }

  isLogOut()
  {
    this.auth.logout();
  }


}
