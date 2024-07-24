import { Component } from '@angular/core';
import { IGX_CALENDAR_DIRECTIVES } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-child-view',
  standalone: true,
  imports: [IGX_CALENDAR_DIRECTIVES],
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent {}
