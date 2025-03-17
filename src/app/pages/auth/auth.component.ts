import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { LoggedUser } from '../../core/models/login.model';
import { EUsuario, User } from '../../core/models/user.model';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  user!: User
  showModal: boolean = false;
  loginForm!: FormGroup;
  createForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });

    this.createForm = this.fb.group({
      email: ['', Validators.required],
      nome: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      role: [EUsuario.USER]
    });
  }

  openDialog() { this.showModal = true }

  closeDialog() { this.showModal = false; }

  login(): void {
    if (this.loginForm.valid) {
      const user: LoggedUser = this.loginForm.value;
      this.authService.login(user).subscribe({
        next: (response) =>
          { this.router.navigate([response.role === EUsuario.ADMIN ? 'admin' : 'dashboard'])}
      });
    }
  }

  create(): void {
    if (this.createForm.valid) {
      const user: User = this.createForm.value;
      this.authService.create(user).subscribe({
        next: () => { this.router.navigate(['dashboard']);}
      });
    }
  }
}
