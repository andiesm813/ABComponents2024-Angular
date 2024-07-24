import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CALENDAR_DIRECTIVES } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [IGX_CALENDAR_DIRECTIVES, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  public value: Date = new Date('2024-07-23T00:00');
}
