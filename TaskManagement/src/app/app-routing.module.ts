import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './index/create-task/create-task.component';

import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'signup',component : SignupComponent},
{path:'login',component : LoginComponent},
{ path: 'index', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
{path:'signup',component : SignupComponent},
{path:'create-task',component : CreateTaskComponent},
{path:'modal',component : ModalComponent},
{ path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
