import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class TimeService {

    public getHoursFromHHMMSS(time: Date): string {
        const timeString = time.toString();
        let hours = timeString.slice(0, 2);
        if (hours.startsWith("0")) {
            hours = hours.slice(1, 2);
        }
        
        return hours;
    }
}