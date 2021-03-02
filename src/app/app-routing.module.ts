import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    
      path: '',
      loadChildren: () => import('./components/category/category.module')
      .then(m => m.CategoryModule)},{
    path: 'category',
     loadChildren: () => import('./components/category/category.module')
     .then(m => m.CategoryModule) },
  { path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },
     {
      path: '**',
      redirectTo: 'not-found',
    },
    
    
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
