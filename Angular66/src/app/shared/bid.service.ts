import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Bid } from './bid.model';


@Injectable({
  providedIn: 'root'
})
export class BidService {
  selectedUserBid: Bid = {
    email: localStorage.getItem('email'),
    post_id: '',
    amount: '',
    rank: '1'
  };

  bids: Bid[];
  bids2: Bid[];

  


  constructor(private http: HttpClient) { 

  }

  placebid(userbid: Bid) {
    return this.http.post(environment.apiBaseUrl + '/makebid', userbid);
  }


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


