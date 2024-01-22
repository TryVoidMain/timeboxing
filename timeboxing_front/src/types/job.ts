import { Guid } from 'guid-typescript';
import { JobStatus } from './JobStatus';

class Job {
    public Id: Guid;
    public Title: string;
    public Description: string;
    public Status: JobStatus;
    public GroupId?: Guid;
    public StartTime: Date;
    public EndTine?: Date;

    constructor(title: string, description: string, groupId?: Guid) {
        this.Id = Guid.create();
        this.Title = title;
        this.Description = description;
        this.Status = JobStatus.Initiated;
        if (!groupId?.isEmpty()) {
            this.GroupId = Guid.createEmpty();
        } else {
            this.GroupId = groupId;
        }
        this.StartTime = new Date();

    }

    public IsFinished(): boolean {
        return (this.Status as JobStatus !== JobStatus.Canceled ||
                this.Status as JobStatus !== JobStatus.Finished);
    }
}