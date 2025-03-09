import { Component } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  showModal: boolean = false;

  openDialog() {
    this.showModal = true;
  }

  closeDialog() {
    this.showModal = false;
  }
}

