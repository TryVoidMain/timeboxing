import { Guid } from "guid-typescript";

export class Insight {
    id: Guid;
    insight: string;
  
    constructor(insight: string) {
      this.id = Guid.create();
      this.insight = insight;
    }
  }