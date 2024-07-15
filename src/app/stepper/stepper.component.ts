import { Component } from '@angular/core';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {}
