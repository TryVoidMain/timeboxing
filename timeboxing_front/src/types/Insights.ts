import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Insights {
    private insights: Array<string>;

    constructor() {
        this.insights = new Array<string>();
    }

    public addInsights(insight: string): void {
        this.insights.join(insight);
    }

    public removeInsight(id: number): void {
        this.insights.splice(id, 1);
    }

    public updateInsight(id: number, value: string): void {
        let str = this.insights.at(id);
        str = value;
    }

    public getInsights(): Array<string> {
        return this.insights;
    }
}