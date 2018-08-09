import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secondcomponent4',
  templateUrl: './secondcomponent4.component.html',
  styleUrls: ['./secondcomponent4.component.css']
})
export class Secondcomponent4Component implements OnInit {
  // textMessage;
  // Message(message){
  //   this.textMessage=message;
  // }
  @Output() msgEvent=new EventEmitter<string>();
 
  message;
  sendMessage(msg)
  {
    this.message=msg;
    this.msgEvent.emit(this.message);
  }
  constructor() { }

  ngOnInit() {
  }

}
