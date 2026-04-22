import { Routes } from '@angular/router';
import { BscNursingComponent } from './pages/bsc-nursing/bsc-nursing';
import { BPharmComponent } from './pages/b-pharm/b-pharm';
import { BptComponent } from './pages/bpt/bpt';
import { DPharmComponent } from './pages/d-pharm/d-pharm';

export const routes: Routes = [
  { path: '', redirectTo: 'bsc-nursing', pathMatch: 'full' },
  { path: 'bsc-nursing', component: BscNursingComponent, title: 'B.Sc Nursing Admission 2026-27 | Dhanwantari Group of Institutions' },
  { path: 'b-pharm', component: BPharmComponent, title: 'B.Pharm Admission 2026-27 | Dhanwantari Group of Institutions' },
  { path: 'bpt', component: BptComponent, title: 'BPT Admission 2026-27 | Dhanwantari Group of Institutions' },
  { path: 'd-pharm', component: DPharmComponent, title: 'D.Pharm Admission 2026-27 | Dhanwantari Group of Institutions' }
];
