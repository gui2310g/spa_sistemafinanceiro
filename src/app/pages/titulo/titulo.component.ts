import { Component } from '@angular/core';
import { ModalComponent } from "../../shared/components/modal/modal.component";

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.scss'
})
export class TituloComponent {
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

  titulos: any[] = [
    {
      id: 1,
      descricao: 'Aluguel',
      valor: 1500.00,
      tipo: "Saida",
      dataReferencia: '2025-03-01',
      dataVencimento: '2025-03-10',
      observacao: 'Pagamento do aluguel do mês'
    },
    {
      id: 2,
      descricao: 'Fatura do Cartão',
      valor: 3200.50,
      tipo: "Saida",
      dataReferencia: '2025-03-05',
      dataVencimento: '2025-03-15',
      observacao: 'Pagamento da fatura do cartão de crédito'
    },
    {
      id: 3,
      descricao: 'Supermercado',
      valor: 800.00,
      tipo: "Saida",
      dataReferencia: '2025-03-07',
      dataVencimento: '2025-03-07',
      observacao: 'Compra mensal de supermercado'
    },
    {
      id: 4,
      descricao: 'Seguro do Carro',
      valor: 1200.00,
      tipo: "Saida",
      dataReferencia: '2025-03-02',
      dataVencimento: '2025-03-12',
      observacao: 'Parcela do seguro do carro'
    }
  ];
}
