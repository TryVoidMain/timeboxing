import { Component } from '@angular/core';
import { InsightsComponent } from '../insights/insights.component';

@Component({
  selector: 'app-day',
  standalone: true,
  imports:  [InsightsComponent],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {

}
