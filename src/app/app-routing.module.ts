import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WallComponent } from './wall/wall.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'signup', component: SignupComponent },
  { path: 'wall', component: WallComponent }
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
});
export const appRouting = RouterModule.forRoot(routes);
