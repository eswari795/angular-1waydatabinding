import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1component',
  templateUrl: './scenario1component.component.html',
  styleUrls: ['./scenario1component.component.css']
})
export class Scenario1componentComponent implements OnInit {

  constructor() { }

  printName(name){
    console.log(name);
    console.log("hello");
  }
  ngOnInit() {
  }

}
