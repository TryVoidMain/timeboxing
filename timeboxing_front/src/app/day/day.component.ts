import { Component, OnInit } from '@angular/core';
import { InsightsComponent } from '../insights/insights.component';
import { DayService } from '../../services/dayService';
import { Day } from '../../types/Day';
import { JobsListComponent } from '../jobs-list/jobs-list.component';
import { DailyJobsComponent } from '../daily-jobs/daily-jobs.component';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-day',
  standalone: true,
  imports:  [InsightsComponent, JobsListComponent, DailyJobsComponent, ScheduleComponent],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent implements OnInit {
  currentDay?: Day;

  constructor(private dayService: DayService) {}

  public ngOnInit(): void {
    this.getDay();
  }

  // А почему тут async? Метод никаким образом не использует промисы.
    // Observable != Promise.
  public async getDay() {
    this.dayService.GetDay(new Date).subscribe((value) => {
      this.currentDay = value;
    })
  }
}
