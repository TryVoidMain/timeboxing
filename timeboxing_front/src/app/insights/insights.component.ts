import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Guid } from 'guid-typescript';

@Component({
    selector: 'app-insights',
    standalone: true,
    imports: [NgFor],
    templateUrl: './insights.component.html',
    styleUrl: './insights.component.css',
})
export class InsightsComponent {
    selectedInsight?: Insight;
    // Обычно с _ начинают приватные поля. Но в данном случае это не приватное поле, а публичное, поскольку по умолчанию все поля публичные.
    // Если хочешь сделать его приватным, то нужно добавить модификатор private
    _viewInsights?: Array<Insight>;

  get insights() {
    return { InsightsList: this._viewInsights!.map(m => m.insight) };
  }
  @Input() set insights(value) {
    this._viewInsights! = [];
    value.InsightsList.forEach((el) => {
      this._viewInsights?.push(new Insight(el));
    });
  }

  constructor() { }

  addInsight(): void {
    this._viewInsights!.push(new Insight("New insight"));
  }

  removeInsight(id: Guid): void {
    this._viewInsights! = this._viewInsights!.filter(i => i.id !== id);
  }
}

// Старайся придерживаться стратегии - один файл- одна сущность. Таким образом ты сможешь легко найти нужный файл и не придется листать весь файл.
class Insight {
  id: Guid;
  insight: string;

  constructor(insight: string) {
    this.id = Guid.create();
    this.insight = insight;
  }
}
