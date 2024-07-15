import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MasterViewComponent } from './master-view/master-view.component';
import { IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IGX_TREE_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IGX_CARD_DIRECTIVES, IgxDividerDirective, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_BUTTON_GROUP_DIRECTIVES, IgxBadgeComponent, IgxCheckboxComponent, IgxRadioComponent, IgxRadioGroupDirective, IgxSwitchComponent, IgcFormsModule, IGX_DATE_PICKER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxSnackbarComponent, IGX_DIALOG_DIRECTIVES, IGX_BANNER_DIRECTIVES } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { StepperComponent } from './stepper/stepper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';
}
