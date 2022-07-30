import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyAComponent } from './lazy-a/lazy-a.component';
import { LazyBComponent } from './lazy-b/lazy-b.component';
import { LazyRoutingModule } from './lazy-routing/lazy-routing.module';

@NgModule({
  declarations: [
    LazyAComponent,
    LazyBComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
  ]
})
export class LazyModule { }
