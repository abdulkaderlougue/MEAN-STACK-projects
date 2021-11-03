import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServices: UsersService) { }

  ngOnInit(): void {
  }
  login(formData:any){
    this.userServices.userLogin(formData).subscribe(
      response => response,
      error =>  "error"
    )
  }
}
