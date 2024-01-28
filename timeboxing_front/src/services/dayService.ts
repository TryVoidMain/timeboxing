import { Injectable } from "@angular/core";
import { Day } from "../types/Day";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class DayService {
    constructor(private http: HttpClient) {}

    public GetDay(date: Date): Observable<Day> {
        const url: string = `${globalThis.serverAddress}api/getday?date=${globalThis.formatDate(date)}`;
     
        return this.http.get<Day>(url);
    }
}