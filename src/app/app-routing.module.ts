import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
const routes: Routes = [
    {
      path: '',
      redirectTo: 'sign-In',
      pathMatch: 'full'
    },
    {
      path : 'dashboard',
      component : DashboardComponent
    },
    {
        path:'sign-In',
        component:SignInComponent
    },
    {
      path:'sign-Up',
      component:SignUpComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }