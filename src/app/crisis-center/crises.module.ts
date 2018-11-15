import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisesRoutingModule } from './crises-routing.module';
import { CrisesListComponent } from './crises-list/crises-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisService } from './crisis.service';
import { MessageService } from '../message.service';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

@NgModule({
  imports: [CommonModule, FormsModule, CrisesRoutingModule],
  declarations: [
    CrisesListComponent,
    CrisisDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
  ],
  providers: [CrisisService, MessageService],
})
export class CrisesModule {}
