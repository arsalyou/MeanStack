import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Message } from './chat.model';


@Injectable({
  providedIn: 'root'
})
export class BidService {
  
   // local_email :localStorage.getItem('email'):\ 
   
   msgs: Message[];
 


  constructor(private http: HttpClient) { }

 

  getmybidlist() {
    return this.http.get(environment.apiBaseUrl+'/getbidbypostid/'+localStorage.getItem('SelectedPostId'));
  }

  getmybidlist2() {
    return this.http.get(environment.apiBaseUrl+'/getbidbyemail/'+localStorage.getItem('email'));
  }

  deleteBid(_id: string) {
    return this.http.delete(environment.apiBaseUrl+'/deletebidbyid'+ `/${_id}`);
  }

  

}