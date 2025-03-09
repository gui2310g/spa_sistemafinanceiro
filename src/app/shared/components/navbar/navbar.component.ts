import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isSidenavOpen: boolean = false;

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
