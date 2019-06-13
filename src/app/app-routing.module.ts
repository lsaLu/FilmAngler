import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "product/:id", component : SingleProductComponent },
  { path : "admin", component : AdminComponent },
  { path : "**", component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
