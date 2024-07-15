import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_ACCORDION_DIRECTIVES, IGX_BANNER_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_TREE_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxCheckboxComponent, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRadioComponent, IgxRadioGroupDirective, IgxRippleDirective, IgxSnackbarComponent, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-master-view',
  standalone: true,
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_BANNER_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TREE_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxRadioGroupDirective, IgxCategoryChartModule, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective, IgxDividerDirective, IgxBadgeComponent, IgxCheckboxComponent, IgxRadioComponent, IgxSwitchComponent, IgcFormsModule, IgxSnackbarComponent, FormsModule, FormsModule],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value: number = 0;
  public value1: string = '{ lower: 10, upper: 40 }';
  public value2: number = 50;
  public value3: string = '1';
  public checked: boolean = true;
  public value4: number = 1;
  public value5: number = 2;
  public value6: number = 4;
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    private financialService: FinancialService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialBoxOfficeRevenue = data,
      error: (_err: any) => this.financialBoxOfficeRevenue = []
    });
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindEmployees = data,
      error: (_err: any) => this.northwindEmployees = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
