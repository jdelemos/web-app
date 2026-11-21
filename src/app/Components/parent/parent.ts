import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sec } from '../sec/sec';
import { Home } from '../home/home';
import { RouterModule } from '@angular/router';
import { ComponentDecorator } from '@angular/core';
import { Child } from '../child/child';


@Component({
  selector: 'app-parent',
  imports: [CommonModule, RouterModule, Child],
  styleUrls: ['./parent.scss'],
  templateUrl: './parent.html'
})
export class Parent {

  parentString: string = 'Hello from Parent';
}
