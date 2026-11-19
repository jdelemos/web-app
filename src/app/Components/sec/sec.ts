import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sec',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './sec.html',
  styleUrl: './sec.scss',
})
export class Sec {

  // later we will add more functionality here as needed
  interviewStatus: boolean = false;

  toggleInterviewStatus() {
    this.interviewStatus = !this.interviewStatus;
  }
  
}
