import { Component } from '@angular/core';
import { InsightsComponent } from '../insights/insights.component';
import { DayService } from '../../services/dayService';
import { Day } from '../../types/Day';
import { JobsListComponent } from '../jobs-list/jobs-list.component';
import { DailyJobsComponent } from '../daily-jobs/daily-jobs.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from "rxjs";


@Component({
  selector: 'app-day',
  standalone: true,
  imports:  [InsightsComponent, JobsListComponent, DailyJobsComponent, ScheduleComponent, NgIf, AsyncPipe ],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {
  currentDay$?: Observable<Day>;

  constructor(private dayService: DayService) {}

  ngOnInit(): void {
    this.currentDay$ = this.dayService.GetDay(new Date);
  }
}
