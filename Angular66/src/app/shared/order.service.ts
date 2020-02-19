import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  selectedUserOrder: Order = {
    post_id: '',
    name: '',
    address: '',
    phoneno: ''
  };
  constructor(private http: HttpClient) { }

  postUserOrder(userOrder: Order){
    return this.http.post(environment.apiBaseUrl+'/makeorder',userOrder);
  }
}
