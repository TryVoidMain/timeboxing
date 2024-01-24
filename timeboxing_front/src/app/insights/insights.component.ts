import { Component } from '@angular/core';
import { Insights } from '../../types/Insights';
import { Guid } from "guid-typescript";
import { NgFor } from '@angular/common';
import { InsightsService } from '../../services/insightsService';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent {
  selectedInsight?: string;
  insights?: Insights;
  
  constructor(private insightsService: InsightsService) { }
  
  public getInsights() {
    this.insightsService.getInsights().subscribe((val) => {
      this.insights = val;
    });
  }
}