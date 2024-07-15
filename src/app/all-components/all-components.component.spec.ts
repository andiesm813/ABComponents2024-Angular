import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_TABS_DIRECTIVES, IgxIconComponent, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IGX_TREE_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxDividerDirective, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_BUTTON_GROUP_DIRECTIVES, IgxBadgeComponent, IgxCheckboxComponent, IgxRadioComponent, IgxRadioGroupDirective, IgxSwitchComponent, IgcFormsModule, IGX_DATE_PICKER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxSnackbarComponent, IGX_DIALOG_DIRECTIVES, IGX_BANNER_DIRECTIVES } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { AllComponentsComponent } from './all-components.component';

describe('AllComponentsComponent', () => {
  let component: AllComponentsComponent;
  let fixture: ComponentFixture<AllComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllComponentsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_TABS_DIRECTIVES, IgxIconComponent, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IGX_TREE_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxDividerDirective, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_BUTTON_GROUP_DIRECTIVES, IgxBadgeComponent, IgxCheckboxComponent, IgxRadioComponent, IgxRadioGroupDirective, IgxSwitchComponent, IgcFormsModule, IGX_DATE_PICKER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxSnackbarComponent, IGX_DIALOG_DIRECTIVES, IGX_BANNER_DIRECTIVES, IgxCategoryChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
