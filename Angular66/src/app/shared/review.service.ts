import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  selectedReview: Review = {
    user:'',
    description: '',
    rating:''
  };

  reviews:Review[];

  constructor(private http: HttpClient) { }

  postReview(userReview: Review){
    return this.http.post(environment.apiBaseUrl+'/makereview',userReview);
  }


  getmyReviews(user: string) {
    return this.http.get(environment.apiBaseUrl+'/reviews'+`/${user}`);
  }

  deleteReview(_id: string) {
    return this.http.delete(environment.apiBaseUrl+'/deletereviewbyid'+ `/${_id}`);
  }

}
