import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Guid } from 'guid-typescript';
import { Insight } from '../../types/Insight';

@Component({
    selector: 'app-insights',
    standalone: true,
    imports: [NgFor],
    templateUrl: './insights.component.html',
    styleUrl: './insights.component.css',
})
export class InsightsComponent {
    selectedInsight?: Insight;
    viewInsights?: Array<Insight>;

  get insights() {
    return { InsightsList: this.viewInsights!.map(m => m.insight) };
  }
  @Input() set insights(value) {
    this.viewInsights! = [];
    value.InsightsList.forEach((el) => {
      this.viewInsights?.push(new Insight(el));
    });
  }

  constructor() { }

  addInsight(): void {
    this.viewInsights!.push(new Insight("New insight"));
  }

  removeInsight(id: Guid): void {
    this.viewInsights! = this.viewInsights!.filter(i => i.id !== id);
  }
}