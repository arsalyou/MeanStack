import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/profile.service'
import { Profile } from '../shared/profile.model';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.profileService.getUser().subscribe((res) => {
      this.profileService.profiles = res as Profile;
    });
  }

}


