import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  object1={firstName:"sd",lastName:"asd",email:"ad",phone:"900"};
  object2={firstName:"sd1",lastName:"asd",email:"ad",phone:"900"};
  object3={firstName:"sd2",lastName:"asd",email:"ad",phone:"900"};
 
  page3:object[] =[this.object1,this.object2,this.object3,this.object1];
  page4:object[] =[this.object1,this.object2,this.object3,this.object1];


  drop(event: CdkDragDrop<object[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
