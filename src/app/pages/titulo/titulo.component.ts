import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.scss'
})
export class TituloComponent {

}
