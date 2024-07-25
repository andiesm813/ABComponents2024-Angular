import { Component } from '@angular/core';
import { IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [IGX_LIST_DIRECTIVES, IgxIconComponent, IgxAvatarComponent],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {}
