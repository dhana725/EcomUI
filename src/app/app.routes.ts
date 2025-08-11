import { Routes } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { ProductComponent } from './Admin/product/product.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { CategoryComponent } from './Admin/category/category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { authGuard } from './AuthGuard/auth.guard';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [authGuard], 
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'product', component: ProductComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'addcategory', component: AddcategoryComponent },
          { path: 'category', component: CategoryComponent },
          { path: 'addproduct', component: AddProductComponent },
        ]
      },
       // Auth routes - flattened
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent ,},
    { path: '', redirectTo: '', pathMatch: 'full',  canActivate: [authGuard],  },
    { path: '**', redirectTo: '' }
];
