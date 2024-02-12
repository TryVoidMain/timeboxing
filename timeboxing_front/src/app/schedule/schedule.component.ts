import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JobComponent } from '../job/job.component';
import { Schedule } from '../../types/Schedule';
import { ScheduleBlock } from '../../types/ScheduleBlock';
import { TimeService } from '../../services/timeService';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ NgFor, NgIf, JobComponent, NgClass ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  scheduleTime: string[] = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00"
  ]; 
  @Input() schedule?: Schedule;

constructor(private timeService: TimeService) {}

  public addStartTime(block: ScheduleBlock): string {
    const time = this.timeService.getHoursFromHHMMSS(block.startTime);
    return `start-${time}`;
  }

  public addEndTime(block: ScheduleBlock): string {
    const time = this.timeService.getHoursFromHHMMSS(block.endTime);
    return `end-${time}`;
  }
}
