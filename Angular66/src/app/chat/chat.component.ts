import { Component, OnInit } from '@angular/core';
//import { ChatService } from '../shared/chat.service';
import { Message } from '../shared/chat.model';

import { Router } from "@angular/router";



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  messages:Message[]; 
    
  get currentUser() {
    return localStorage.getItem('email');
  }

  constructor() { }

  ngOnInit() {
    let msg: Message = {
        sender_email : 'mohsinhayat@gmail.com',
        receiver_email: "arslan@yahoo.com",
        msg: "hello world",
        time: new Date()
    };
    this.messages.push(msg);
  }


}
