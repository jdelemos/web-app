import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComp } from './Components/new-comp/new-comp';
import {RouterLink} from '@angular/router';
import { NavRail } from './Components/layout/nav-rail/nav-rail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavRail],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web-app');
}
