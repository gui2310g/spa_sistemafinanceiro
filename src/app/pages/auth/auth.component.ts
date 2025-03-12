import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { LoggedUser } from '../../core/models/login.model';
import { User } from '../../core/models/user.model';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
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
    });
  }

  openDialog() { this.showModal = true }

  closeDialog() { this.showModal = false; }

  login(): void {
    if (this.loginForm.valid) {
      const user: LoggedUser = this.loginForm.value;
      this.authService.login(user).subscribe({
        next: () => setTimeout(() => { this.router.navigate(['dashboard'])}, 1000),
      });
    }
  }

  create(): void {
    if (this.createForm.valid) {
      const user: User = this.createForm.value;
      this.authService.create(user).subscribe({
        next: () => setTimeout(() => { this.router.navigate(['dashboard']);}, 1000),
      });
    }
  }
}
