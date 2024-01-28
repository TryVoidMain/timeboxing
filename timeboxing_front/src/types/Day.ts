import { DailyJobs } from "./DailyJobs";
import { Insights } from "./Insights";
import { JobsList } from "./JobsList";
import { Schedule } from "./Schedule";

export interface Day {
    dailyJobs: DailyJobs;
    jobsList: JobsList;
    schedule: Schedule;
    insights: Insights;
}