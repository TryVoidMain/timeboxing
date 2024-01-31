import { Guid } from 'guid-typescript';
import { JobStatus } from './JobStatus';

export interface Job {
    id?: Guid;
    title: string;
    description: string;
    status?: JobStatus;
    groupId?: Guid;
    startTime: Date;
    endTine?: Date;
}