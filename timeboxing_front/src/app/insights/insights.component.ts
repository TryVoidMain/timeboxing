import { Component, Input, Output } from '@angular/core';
import { Insights } from '../../types/Insights';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css',
})
export class InsightsComponent {
  selectedInsight?: string;
  @Input() @Output() insights?: Insights;
  
  constructor() { }

  addInsight(): void {
    this.insights?.InsightsList.push("New insight");
  }

  removeInsight(insight: string): void {
    this.insights!.InsightsList = this.insights!.InsightsList.filter(i => i !== insight);
  }
}