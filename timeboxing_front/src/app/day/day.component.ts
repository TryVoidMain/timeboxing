import { Component, OnInit } from '@angular/core';
import { InsightsComponent } from '../insights/insights.component';
import { DayService } from '../../services/dayService';
import { Day } from '../../types/Day';
import { JobsListComponent } from '../jobs-list/jobs-list.component';
import { DailyJobsComponent } from '../daily-jobs/daily-jobs.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-day',
  standalone: true,
  imports:  [InsightsComponent, AsyncPipe,JobsListComponent, DailyJobsComponent, ScheduleComponent, NgIf ],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent implements OnInit {
  currentDay$?: Observable<Day>; 
  constructor(private dayService: DayService) {}

  public ngOnInit(): void {
    this.currentDay$ = this.dayService.GetDay(new Date); 
  }
}
