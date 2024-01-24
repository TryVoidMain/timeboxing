import { Guid } from 'guid-typescript';
import { JobStatus } from './JobStatus';

export interface Job {
    Id?: Guid;
    Title: string;
    Description: string;
    Status: JobStatus;
    GroupId?: Guid;
    StartTime: Date;
    EndTine?: Date;
}