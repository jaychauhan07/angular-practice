import { EmaployeeFormComponent } from './emaployee-form/emaployee-form.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { AuthRoleGuard } from './auth-role.guard';
import { EmpChildComponent } from './emp-child/emp-child.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {"roles": ["ADMIN", "CEO", "HR"]},
    canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard],
    // canDeactivate: [CanDeactivateGuard],
    children:[
      {
        path: "",
        redirectTo: "/employee",
        pathMatch: "full"
      },
      {
        path: "child",
        component: EmpChildComponent,
      },
    ]
  },
  {
    path: 'employee/:id/details',
    component: EmployeesDetailComponent,
  },
  {
    path: 'employee/:id/edit',
    component: EmaployeeFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),
    // canLoad: [],
    
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
