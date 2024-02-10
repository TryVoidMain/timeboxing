import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Day } from "../types/Day";

@Injectable({providedIn: "root" }) 
export class RestService {
 
    constructor(private httpClient: HttpClient) { }

    public getDay(url: string) {
        return this.httpClient.get<Day>(url);
    }
 }