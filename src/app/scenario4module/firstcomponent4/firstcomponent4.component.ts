import { Component} from '@angular/core';
// import {Secondcomponent4Component} from './secondcomponent4/secondcomponent4.component'
@Component({
  selector: 'senariofour',
  templateUrl: './firstcomponent4.component.html',
  styleUrls: ['./firstcomponent4.component.css']
})
export class FirstComponent1  {

  // @ViewChild(Secondcomponent4Component) child;
  constructor() { }

  textMessage;
  
  recieveMessage($event){
    this.textMessage=$event;
  }
  
  // ngAfterViewInit(){
  //   this.textInput=this.child.textMessage;
  // }
  

}
