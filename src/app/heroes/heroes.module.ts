import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageService } from '../message.service';

@NgModule({
  imports: [CommonModule, FormsModule, HeroesRoutingModule],
  declarations: [HeroesListComponent, HeroDetailComponent],
  providers: [HeroService, MessageService],
})
export class HeroesModule {}
