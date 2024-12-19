import { Routes } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {CustomersComponent} from './customers/customers.component';
import {BillingComponent} from './billing/billing.component';

export const routes: Routes = [
  {
    path : "products" , component : ProductsComponent
  },
  {
    path : "customers" , component : CustomersComponent
  },

  {
    path : "billing/:customerId" , component : BillingComponent
  },
];
