import { Component, Input } from '@angular/core';
import { DailyJobs } from '../../types/DailyJobs';
import { NgFor } from '@angular/common';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-daily-jobs',
  standalone: true,
  imports: [ NgFor, JobComponent ],
  templateUrl: './daily-jobs.component.html',
  styleUrl: './daily-jobs.component.css'
})
export class DailyJobsComponent {
  @Input() public dailyJobs?: DailyJobs;

  constructor() { }
}