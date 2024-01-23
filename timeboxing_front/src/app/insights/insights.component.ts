import { Component } from '@angular/core';
import { Insights } from '../../types/Insights';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent {
  selectedInsight?: string;
  insights?: string[];
  
  constructor() {

  }
  
  public getInsights() {
    
  }
}
