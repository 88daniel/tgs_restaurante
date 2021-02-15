import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'users',
        children: [
          {
            path: '',
            loadChildren: () => import('../users/users.module').then( m => m.UsersPageModule)
          },
        ]
      },
      {
        path: 'pedidos',
        children: [
          {
            path: '',
            loadChildren: () => import('../pedidos/pedidos.module').then( m => m.PedidosPageModule)
          },
        ]
      },
      {
        path: 'productos',
        children: [
          {
            path: '',
            loadChildren: () => import('../productos/productos.module').then( m => m.ProductosPageModule)
          },
        ]
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
