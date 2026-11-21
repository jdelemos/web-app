// nav-rail.component.ts
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  icon: string; // Can be Material Icon name, SVG path, or emoji/icon class
  route: string;
}

@Component({
  selector: 'app-nav-rail',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-rail.html',
  styleUrl: './nav-rail.scss'
})
export class NavRail {
  isExpanded = signal(false);

  navItems: NavItem[] = [
    { label: 'Home', icon: '🏠', route: '/' },
    { label: 'Projects', icon: '📁', route: '/new-comp/new-comp' },
    { label: 'Music', icon: '🎵', route: '/sec' },
    { label: 'Parent', icon: '👤', route: '/parent' },
    { label: 'Child', icon: '👶', route: '/child' }
  ];
 

  toggleRail() {
    this.isExpanded.update(expanded => !expanded);
  }
}
