import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "cart", component : CartComponent },
  { path : "details/:id", component : DetailsComponent },
  { path : "admin", component : AdminComponent },
  { path : "**", component : NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
