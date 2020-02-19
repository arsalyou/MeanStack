import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  selectedUserProfile: Profile = {
    emailAddress: '',
    name: '',
    country: '',
    city: '',
    description: '',
    businessType: ''
  };

  editprofile:Profile;

  profiles : Profile;
  constructor(private http: HttpClient) { }

  postUserProfile(userProfile: Profile){
    return this.http.post(environment.apiBaseUrl+'/makeprofile',userProfile);
  }

  getUser() {
    return this.http.get(environment.apiBaseUrl+'/getprofilebyemail/'+localStorage.getItem('email'));
  }

  EditThisUser() {
    return this.http.get(environment.apiBaseUrl+'/getprofilebyemail/yasirabbasmughal5655@gmail.com');
  }

  updateUser(usr: Profile) {
    return this.http.put(environment.apiBaseUrl + '/updateprofilebyid/5dd4a36b6211a44170fc4f4a', usr);

  }
}

