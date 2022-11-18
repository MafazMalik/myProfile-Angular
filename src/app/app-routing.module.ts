import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./home-module/home-module.module').then(m => m.HomeModuleModule)
  },
  {
    path:'about',
    loadChildren: () => import('./about-module/about-module.module').then(m => m.AboutModuleModule)
  },
  {
    path:'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
