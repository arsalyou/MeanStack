import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/profile.service'
import { Profile } from '../shared/profile.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.profileService.EditThisUser().subscribe((res) => {
      this.profileService.editprofile = res as Profile;
      this.profileService.selectedUserProfile.emailAddress=this.profileService.editprofile.emailAddress;
      this.profileService.selectedUserProfile.name=this.profileService.editprofile.name;
      this.profileService.selectedUserProfile.businessType=this.profileService.editprofile.businessType;
      this.profileService.selectedUserProfile.country=this.profileService.editprofile.country;
      this.profileService.selectedUserProfile.city=this.profileService.editprofile.city;
      this.profileService.selectedUserProfile.description=this.profileService.editprofile.description;
    });
  }

  onSubmit(form: NgForm) {
    this.profileService.updateUser(form.value).subscribe(
      res => {
        this.resetForm(form);
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
  }

}
