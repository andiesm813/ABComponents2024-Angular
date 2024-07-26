import { Component, OnDestroy, OnInit } from '@angular/core';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { TeamGrowthType } from '../models/dashboard-data/team-growth-type';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [IgxCategoryChartModule],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public dashboardDataTeamGrowth: TeamGrowthType[] = [];

  constructor(
    private dashboardDataService: DashboardDataService,
  ) {}

  ngOnInit() {
    this.dashboardDataService.getTeamGrowthList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.dashboardDataTeamGrowth = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
