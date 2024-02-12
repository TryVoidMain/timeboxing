import { Injectable } from "@angular/core";
import { Day } from "../types/Day";
import { Observable } from "rxjs";
import { RestService } from "./restService";
import { DateService } from "./dateService";
import { serverAddress } from "../main";

@Injectable({providedIn: 'root'})
export class DayService {
    constructor(private restService: RestService, private dateService: DateService) {}

    public getDay(date: Date): Observable<Day> {
        const url: string = `${serverAddress}api/getday?date=${this.dateService.dateToMMDDYYYYString(date)}`;
     
        return this.restService.getDay(url);
    }
}
