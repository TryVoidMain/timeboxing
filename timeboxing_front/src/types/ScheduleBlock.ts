import { Time } from "@angular/common";
import { Job } from "./Job";

export interface ScheduleBlock {
    startTime: Time;
    endTime: Time;
    jobToWork: Job;
}