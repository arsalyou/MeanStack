import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from '../../shared/user.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  constructor(private userService: UserService,private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    if (this.model.email=="admin@admin.com" && this.model.password=="admin")
    {
      this.router.navigateByUrl('/adminpanel');
    }
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        localStorage.setItem('email',this.model.email);
        this.router.navigateByUrl('/showpost');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
