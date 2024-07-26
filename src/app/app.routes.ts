import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { AllComponentsComponent } from './all-components/all-components.component';
import { AvatarsImagesComponent } from './avatars-images/avatars-images.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { FormsComponent } from './forms/forms.component';
import { ListsComponent } from './lists/lists.component';
import { MouseEventsComponent } from './mouse-events/mouse-events.component';
import { RadiogroupComponent } from './radiogroup/radiogroup.component';
import { StepperComponent } from './stepper/stepper.component';

export const routes: Routes = [
  { path: '', redirectTo: 'all-components', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'all-components', component: AllComponentsComponent, data: { text: 'AllComponents' } },
  { path: 'avatars-images', component: AvatarsImagesComponent, data: { text: 'Avatars-Images' } },
  { path: 'calendar', component: CalendarComponent, data: { text: 'Calendar' } },
  { path: 'cards', component: CardsComponent, data: { text: 'Cards' } },
  { path: 'charts', component: ChartsComponent, data: { text: 'Charts' } },
  { path: 'forms', component: FormsComponent, data: { text: 'Forms' } },
  { path: 'lists', component: ListsComponent, data: { text: 'Lists' } },
  { path: 'mouse-events', component: MouseEventsComponent, data: { text: 'Mouse Events' } },
  { path: 'radiogroup', component: RadiogroupComponent, data: { text: 'Radiogroup' } },
  { path: 'stepper', component: StepperComponent, data: { text: 'Stepper' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
