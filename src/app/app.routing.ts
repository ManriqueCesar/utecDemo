import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './_pages/recetas/recetas.component';
import { StatusComponent } from './_pages/status/status.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', children: []},
  { path: 'status', component: StatusComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: '**', redirectTo: '' }

  // otherwise redirect to home
];

export const appRoutingModule = RouterModule.forRoot(routes);