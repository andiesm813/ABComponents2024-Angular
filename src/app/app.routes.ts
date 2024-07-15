import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { StepperComponent } from './stepper/stepper.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', component: MasterViewComponent, data: { text: 'Master View' } },
  { path: 'radio-group', component: RadioGroupComponent, data: { text: 'RadioGroup' } },
  { path: 'stepper', component: StepperComponent, data: { text: 'Stepper' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
