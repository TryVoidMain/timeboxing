import { Component, OnInit } from '@angular/core';
import { InsightsComponent } from '../insights/insights.component';
import { DayService } from '../../services/dayService';
import { Day } from '../../types/Day';

@Component({
  selector: 'app-day',
  standalone: true,
  imports:  [InsightsComponent],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent implements OnInit {
  currentDay?: Day;

  constructor(private dayService: DayService) {}

  public ngOnInit(): void {
    this.getDay();
  }

  public async getDay() {
    this.dayService.GetDay(new Date).subscribe((value) => {
      this.currentDay = value;
    })
  }
}
