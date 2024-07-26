import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { TeamGrowthType } from '../models/dashboard-data/team-growth-type';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  constructor(
    private http: HttpClient
  ) { }

  public getTeamGrowthList(): Observable<TeamGrowthType[]> {
    return this.http.get<TeamGrowthType[]>("https://excel2json.io/api/share/9d362c81-e18a-4fff-4355-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<TeamGrowthType[]>('getTeamGrowthList', [])));
  }
}
