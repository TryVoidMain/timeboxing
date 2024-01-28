import { DailyJobs } from "./DailyJobs";
import { Insights } from "./Insights";
import { JobsList } from "./JobsList";
import { Schedule } from "./Schedule";

export interface Day {
    DailyJobs: DailyJobs;
    JobsList: JobsList;
    Schedule: Schedule;
    Insights: Insights;
}