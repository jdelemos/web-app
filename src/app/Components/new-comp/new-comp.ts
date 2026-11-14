import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-new-comp',
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './new-comp.html',
  styleUrls: ['./new-comp.scss'],
})
export class NewComp {
 router = RouterLink;
  outlet = RouterOutlet;
}
