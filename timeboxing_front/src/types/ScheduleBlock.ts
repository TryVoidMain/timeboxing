import { Time } from "@angular/common";
import { Job } from "./Job";

export interface ScheduleBlock {
    startTime: Date;
    endTime: Date;
    jobToWork: Job;
}