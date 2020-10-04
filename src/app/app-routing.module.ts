import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AktuellComponent } from './aktuell/aktuell.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { TrainingComponent } from './training/training.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Routes = [
  { path: '', redirectTo: '/aktuell', pathMatch: 'full' },
  { path: 'aktuell', component: AktuellComponent },
  { path: 'ueber-uns', component: UeberUnsComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
