import { Injectable } from "@angular/core";
import { Insights } from "../types/Insights";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable ({ providedIn: 'root' })
export class InsightsService {
    constructor(private http: HttpClient) { }

    public getInsights(): Observable<Insights> {
        const url: string = `${global.serverAddress}api/getinsights`;

        return this.http.get<Insights>(url);
    }
}