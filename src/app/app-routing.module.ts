import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from 'src/app/pages/main/main.component';
import { DetailComponent } from 'src/app/pages/detail/detail.component';

const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'detail/:data', component: DetailComponent },
	{ path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
