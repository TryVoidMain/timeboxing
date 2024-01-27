import { Component, OnInit } from '@angular/core';
import { Insights } from '../../types/Insights';
import { NgFor } from '@angular/common';
import { InsightsService } from '../../services/insightsService';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent implements OnInit {
  selectedInsight?: string;
  insights?: Insights;
  
  constructor(private insightsService: InsightsService) { }
  
  public ngOnInit(): void {
    this.getInsights();
  }

  public async getInsights() {
    this.insightsService.getInsights().subscribe((val) => {
      this.insights = val;
    });
  }
}