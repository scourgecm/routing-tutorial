import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesListComponent,
    data: { animation: 'heroes' },
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent,
    data: { animation: 'hero' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
