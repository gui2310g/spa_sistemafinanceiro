import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EUsuario, User } from '../../../core/models/user.model';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  user!: User
  isSidenavOpen: boolean = false;

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.UserStatus();
  }

  UserStatus(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.user = {
        id: payload.id,
        email: payload.sub,
        role: payload.role as EUsuario,
        token: token
      };
    }
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate([''])
  }
}
