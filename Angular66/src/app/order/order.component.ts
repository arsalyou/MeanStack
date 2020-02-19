import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service'
import { Router } from "@angular/router";
import { Order } from '../shared/order.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.orderService.postUserOrder(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);

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
    this.orderService.selectedUserOrder = {
      post_id:'',
      name: '', 
      address: '',
      phoneno: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
