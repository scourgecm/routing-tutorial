import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisesModule } from './crisis-center/crises.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminModule } from './admin/admin.module';
import { DialogService } from './dialog.service';
import { CanDeactivateGuard } from './can-deactivate.guard';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    CrisesModule,
    AdminModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, PageNotFoundComponent, ComposeMessageComponent],
  providers: [DialogService, CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
