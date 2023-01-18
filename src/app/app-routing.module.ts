import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
