import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showModal: boolean = false;
  showDeleteModal: boolean = false;

  OpenModal(): void {
    this.showModal = true
  }

  CloseModal(): void {
    this.showModal = false
  }

  OpenDeleteModal(): void {
    this.showDeleteModal = true;
  }

  CloseDeleteModal(): void {
    this.showDeleteModal = false;
  }

  centrodeCustos: any[] = [
    {
      id: 1,
      descricao: 'Casa',
      observacao: 'Realizando um orçamento na casa'
    },
    {
      id: 2,
      descricao: 'Banco',
      observacao: 'Realizando uma oferta no banco'
    },
    {
      id: 3,
      descricao: 'Obra',
      observacao: 'Verificando um orçamento na arquitetura da obra'
    },
    {
      id: 4,
      descricao: 'Carro',
      observacao: 'Financiando o carro'
    },

  ]
}
