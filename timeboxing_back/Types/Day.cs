namespace timeboxing_back.Types
{
    public class Day
    {
        public DateOnly CurrentDay { get; init; }

        public DailyJobs DailyJobs { get; set; } = new DailyJobs();
        public JobsList JobsList { get; set; } = new JobsList();
        public Schedule Schedule { get; set; } = new Schedule();
        public Insights Insights { get; set; } = new Insights();

        public Day()
        {
            CurrentDay = DateOnly.FromDateTime(DateTime.Now);
        }

        public Day(DateOnly currentDay)
        {
            CurrentDay = currentDay;
        }
    }
}
