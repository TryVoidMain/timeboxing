namespace timeboxing_back.Types
{
    public class ScheduleBlock : IEntity
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
    }
}
