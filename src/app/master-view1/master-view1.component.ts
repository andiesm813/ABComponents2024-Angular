import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxRadioComponent, IgxRadioGroupDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-master-view1',
  standalone: true,
  imports: [IgxRadioGroupDirective, IgxRadioComponent, FormsModule],
  templateUrl: './master-view1.component.html',
  styleUrls: ['./master-view1.component.scss']
})
export class MasterView1Component {
  public value: string = '1';
}
