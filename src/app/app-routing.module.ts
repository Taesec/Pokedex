import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PadreComponent } from './padre/padre.component';
import { BComponent } from './b/b.component';
const routes: Routes = [
  {path:'',    component: PadreComponent},
  {path:'home',   component: HomeComponent},
  {path:'b', component: BComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
