import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LayoutComponent } from './pages/layoutpage/layout.component';
import { TituloComponent } from './pages/titulo/titulo.component';
import { CentrodeCustoComponent } from './pages/centrodeCusto/centrodeCusto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EUsuario } from './core/models/user.model';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { AuthGuard } from './core/guards/authGuard.guard';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'titulo',
        component: TituloComponent,
        canActivate: [AuthGuard],
        data: { role: EUsuario.USER },
      },
      {
        path: 'centrodecusto',
        component: CentrodeCustoComponent,
        canActivate: [AuthGuard],
        data: { role: EUsuario.USER },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: { role: EUsuario.USER },
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { role: EUsuario.ADMIN }
      }
    ],
  },
  { path: 'access-denied', component: AccessDeniedComponent },
];
