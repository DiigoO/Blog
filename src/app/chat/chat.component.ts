import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  socket: WebSocket;
  status: string;
  msg: string;
  msgsRecebidas = new Array<string>();
  usuarios = new Array<User>();

  ngOnInit() {
    this.socket = new WebSocket('ws://localhost:3000');
    this.socket.onmessage = (evt) => {
      this.msgsRecebidas.push(evt.data);
    };
  }
  sendMessage() {
    if(!(this.socket.readyState === WebSocket.OPEN)) {
      status = "offline";
      return false;
    }
    status = "online";
    this.socket.send(this.msg);
  }
}

class User {

}