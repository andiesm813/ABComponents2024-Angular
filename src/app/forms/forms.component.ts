import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IgxDateTimeEditorModule, IgxIconComponent, IgxInputGroupModule } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxDateTimeEditorModule, IgxInputGroupModule, IgxIconComponent, FormsModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value: string = '5';
  public value1: number = 10;
  public value2: string = 'vvxcvxcvxcv';
  public value3: string = 'cvxcvxcvxc';
  public value4: string = '1';
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialBoxOfficeRevenue = data,
      error: (_err: any) => this.financialBoxOfficeRevenue = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
