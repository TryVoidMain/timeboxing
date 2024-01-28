import { Time } from "@angular/common";
import { Job } from "./Job";

export interface ScheduleBlock {
    StartTime: Time;
    EndTime: Time;
    JobToWork: Job;
}