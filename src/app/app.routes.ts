import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { AllComponentsComponent } from './all-components/all-components.component';
import { RadiogroupComponent } from './radiogroup/radiogroup.component';
import { StepperComponent } from './stepper/stepper.component';

export const routes: Routes = [
  { path: '', redirectTo: 'all-components', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'all-components', component: AllComponentsComponent, data: { text: 'AllComponents' } },
  { path: 'radiogroup', component: RadiogroupComponent, data: { text: 'Radiogroup' } },
  { path: 'stepper', component: StepperComponent, data: { text: 'Stepper' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
