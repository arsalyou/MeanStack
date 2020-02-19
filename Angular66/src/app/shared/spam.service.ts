import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Spam } from './spam.model';



@Injectable({
  providedIn: 'root'
})
export class SpamService {
  selectedSpamReport: Spam = {
    user:'',
    description: ''
  };

  spams:Spam[];

  constructor(private http: HttpClient) { }

  postUserSpam(userReport: Spam){
    //console.log(userPost.user);
    return this.http.post(environment.apiBaseUrl+'/reportspam',userReport);
  }

  getspamreports() {
    return this.http.get(environment.apiBaseUrl+'/getspamreports');
  }

  deleteThisUser(user: string) {
    return this.http.delete(environment.apiBaseUrl+'/deletebyemail'+ `/${user}`);
  }

  deleteThisProfile(user: string) {
    return this.http.delete(environment.apiBaseUrl+'/deleteprofilebyemail'+ `/${user}`);
  }
  deleteThisSpamReport(user: string) {
    return this.http.delete(environment.apiBaseUrl+'/deletespambyemail'+ `/${user}`);
  }
}
