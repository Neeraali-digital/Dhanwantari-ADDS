import { Routes } from '@angular/router';
import { BscNursingComponent } from './pages/bsc-nursing/bsc-nursing';

export const routes: Routes = [
  { path: '', redirectTo: 'bsc-nursing', pathMatch: 'full' },
  { path: 'bsc-nursing', component: BscNursingComponent, title: 'B.Sc Nursing Admission 2026-27 | Dhanwantari Group of Institutions' }
];
