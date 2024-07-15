import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxRadioComponent, IgxRadioGroupDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-radiogroup',
  standalone: true,
  imports: [IgxRadioGroupDirective, IgxRadioComponent, FormsModule],
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.scss']
})
export class RadiogroupComponent {
  public value: string = '1';
}
