namespace timeboxing_back.Types
{
    public class ScheduleBlock : IEntity, ICloneable
    {
        public Guid Id { get; init; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public Job JobToWork { get; set; }

        public ScheduleBlock(Job job, TimeOnly startTime, TimeOnly endTime)
        {
            Id = Guid.NewGuid();
            JobToWork = job;
            StartTime = startTime;
            EndTime = endTime;
        }
        public ScheduleBlock Copy()
        {
            return (ScheduleBlock)MemberwiseClone();
        }
        public object Clone()
        {
            return new ScheduleBlock(JobToWork, StartTime, EndTime);
        }
    }
}
