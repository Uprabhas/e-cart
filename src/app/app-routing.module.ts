import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { OrderPageComponent } from './component/order-page/order-page.component';

const routes: Routes = [
  {
    path:'',component : ProductViewComponent
  },
  {
    path:'product-detail/:productid',component:ProductDetailComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'order',component:OrderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
