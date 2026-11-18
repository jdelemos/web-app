import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {RouterLink, RouterOutlet} from '@angular/router';


// New component for handling routing with RouterLink and RouterOutlet
// decorators always start with @ symbol in Angular
@Component({
  selector: 'app-new-comp',
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './new-comp.html',
  styleUrls: ['./new-comp.scss'],
})
export class NewComp {
 router = RouterLink;
  outlet = RouterOutlet;

  //boolean flag for conditional rendering
  interviewStatus: String = "Happy Interview";
  interviewStatus2: String = "Sad Interview";
  
  //simple data binding example
  data = "Hello, this is new component data"; 
  //simple object for user information
  user = {
    name: 'Jon',
    email: 'example@example.com'
  }
  truthValue: boolean = true;
  //simple function for toggling the boolean flag
  toggle() {
    this.truthValue = !this.truthValue;
    if (this.truthValue) {
      this.interviewStatus = "Happy Interview";
    } else {
      this.interviewStatus = "Sad Interview";
    }
  }
}
