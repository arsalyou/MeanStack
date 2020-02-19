import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.css'],
  providers : [ProfileService]
})
export class ProfileformComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private profileService: ProfileService,private router : Router) { }

  ngOnInit() {
    console.log(localStorage.getItem("email"));
    this.profileService.selectedUserProfile.emailAddress=localStorage.getItem("email");
  }

  onSubmit(form: NgForm) {
    this.profileService.postUserProfile(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
        this.router.navigateByUrl('/showpost');

      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.profileService.selectedUserProfile = {
      emailAddress:'',
      name: '', 
      country: '',
      city: '',
      description: '', 
      businessType: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
