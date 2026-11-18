import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

 

export class Home {

  router = RouterLink;
  outlet = RouterOutlet;

  showMessageFlag: boolean = false;
  message: string = '';
  displayName: string = '';
 
  routerLink = '/new-comp/new-comp';
  //video link for embedding in the template
  vid1 = 'https://www.youtube.com/embed/Rkc09sTiS7g?si=x1LOS_k6QvL5d3uS';
  
  // () indicate a function bind, so the function is called when the event occurs
  // simple example of event binding for the button click
  showMessage(): void {
    alert('Button clicked!');
  }
  
  updateName(name: string): void {
    this.message = name;
    this.showMessageFlag = true;
  }

  hide(): void {
    this.showMessageFlag = false;
  }
}


