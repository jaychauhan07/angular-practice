import { LazyBComponent } from './../lazy-b/lazy-b.component';
import { LazyAComponent } from './../lazy-a/lazy-a.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LazyAComponent
  },
  {
    path: "lazy-a",
    component: LazyAComponent
  },
  {
    path: "lazy-b",
    component: LazyBComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
