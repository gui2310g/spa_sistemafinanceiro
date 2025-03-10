import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LayoutComponent } from './pages/layoutpage/layout.component';
import { TituloComponent } from './pages/titulo/titulo.component';
import { CentrodeCustoComponent } from './pages/centrodeCusto/centrodeCusto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: "titulo", component: TituloComponent },
      { path: "centrodecusto", component: CentrodeCustoComponent },
      { path: "dashboard", component: DashboardComponent }
    ]
  }
];
