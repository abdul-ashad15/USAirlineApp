import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  {    
    path: '',    
    //redirectTo: 'login',
    component: LoginComponent,  
    pathMatch: 'full',    
  },    
  {    
    path:'admin',
    component: AdminComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AdminComponent]
