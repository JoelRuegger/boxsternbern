import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AktuellComponent } from './aktuell/aktuell.component';
import { TrainingComponent } from './training/training.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ImpressumComponent } from './impressum/impressum.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    HomeComponent,
    AktuellComponent,
    TrainingComponent,
    KontaktComponent,
    TimelineComponent,
    PageNotFoundComponent,
    UeberUnsComponent,
    ImpressumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLhoKRRrYIX_wmdtyFPqrkoP4Z-T6zpgg'
    })
  ],
  exports: [
    TimelineComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
