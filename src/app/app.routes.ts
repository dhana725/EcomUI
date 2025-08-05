import { Routes } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { ProductComponent } from './Admin/product/product.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { CategoryComponent } from './Admin/category/category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'product', component: ProductComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'addcategory', component: AddcategoryComponent },
          { path: 'category', component: CategoryComponent },
          { path: 'addproduct', component: AddProductComponent },



        ]
      },
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
