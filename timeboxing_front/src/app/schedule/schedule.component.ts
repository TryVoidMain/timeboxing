import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JobComponent } from '../job/job.component';
import { Schedule } from '../../types/Schedule';
import { ScheduleBlock } from '../../types/ScheduleBlock';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ NgFor, NgIf, JobComponent ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  @Input() schedule?: Schedule;
}
