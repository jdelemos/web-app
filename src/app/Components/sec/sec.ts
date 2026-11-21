import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sec',
  imports: [RouterLink, CommonModule],
  templateUrl: './sec.html',
  styleUrl: './sec.scss',
})
export class Sec {

  // later we will add more functionality here as needed
  interviewStatus: boolean = false;
  careerStatus1: string = "Junior Developer";
  careerStatus2: string = "Mid-level Developer";
  careerStatus3: string = "Senior Developer";
  modNum = 0; 
  careerStatusDefault: string = "Learning for next position";
  text: string = "Interview happy";
  num: number = 12345.67; 
  user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
  };

  toggleInterviewStatus() {
    this.interviewStatus = !this.interviewStatus;
  }

  toggleModNum() {
    this.modNum = (this.modNum + 1) % 3;
  }
  
}
