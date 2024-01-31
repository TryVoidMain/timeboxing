namespace timeboxing_back.Types
{
    public class Job : IEntity, ICloneable
    {
        public Guid Id { get; init; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsFinished => Status != JobStatus.Finished || Status != JobStatus.Canceled;
        public JobStatus Status { get; set; }
        public Guid? GroupId { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly? EndDate { get; set; }
        
        public Job(string title, string description = default)
        {
            Id = Guid.NewGuid();
            Status = JobStatus.Initiated;
            Title = title;
            Description = description;
            StartDate = DateOnly.FromDateTime(DateTime.Now);
        }

        public Job Copy()
        {
            return (Job)this.MemberwiseClone();
        }

        public object Clone()
        {
            return new Job(Title, Description) { 
                Status = Status,
                StartDate = StartDate,
                GroupId = GroupId,
                EndDate = EndDate
            };
        }
    }
}
