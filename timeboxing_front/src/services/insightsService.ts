import { Injectable } from "@angular/core";
import { Insights } from "../types/Insights";
import { Guid } from "guid-typescript";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable ({ providedIn: 'root' })
export class InsightsService {
    private serverAddress: string = "http://127.0.0.1:8080/";

    constructor(private http: HttpClient) { }

    public getInsights(): Observable<Insights> {
        const url: string = `${this.serverAddress}api/getinsights`;

        return this.http.get<Insights>(url);
    }
}