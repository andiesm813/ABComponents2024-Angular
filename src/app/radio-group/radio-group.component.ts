import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxRadioComponent, IgxRadioGroupDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [IgxRadioGroupDirective, IgxRadioComponent, FormsModule],
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent {
  public value: string = '1';
}
