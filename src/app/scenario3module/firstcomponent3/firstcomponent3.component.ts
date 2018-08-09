import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent3.component.html',
  styleUrls: ['./firstcomponent3.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  textInput;
  printMessage(name){

    this.textInput=name;
  }
  ngOnInit() {
  }

}
