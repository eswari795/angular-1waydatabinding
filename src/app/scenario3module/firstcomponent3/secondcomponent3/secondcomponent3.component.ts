import { Component, OnInit, Input, Output } from '@angular/core';
@Component({
  selector: 'app-secondcomponent3',
  templateUrl: './secondcomponent3.component.html',
  styleUrls: ['./secondcomponent3.component.css']
})
export class Secondcomponent3Component implements OnInit {

  @Input() name;
 
  constructor() { }

  ngOnInit() {
  }

}
