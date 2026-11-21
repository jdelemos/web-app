import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sec } from '../sec/sec';
import { Home } from '../home/home';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-child',
  imports: [CommonModule, RouterModule],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() childString: string = '';
  @Output() childEvent: EventEmitter<string> = new EventEmitter<string>();


}
