namespace timeboxing_back.Types
{
    public class DailyJobs : IJobsCollection
    {
        public Job[] Jobs { get; set; } = new Job[3];

        public DailyJobs() { }

        public bool AddJob(Job job)
        {
            if (Jobs.Any(j => j.Id == job.Id))
            {
                var currentJob = Jobs.FirstOrDefault(j => j.Id == job.Id);
                currentJob = job;
                return true;
            }

            return false;
        }

        public bool RemoveJob(Job job)
        {
            if (Jobs.Any(j => j.Id == job.Id))
            {
                var currentJob = Jobs.FirstOrDefault(i => i.Id == job.Id);
                currentJob = null;
                return true;
            }

            return false;
        }

        public bool UpdateJob(Job job)
        {
            if (Jobs.Any(j => j.Id == job.Id))
            {
                var currentJob = Jobs.First(j => j.Id == job.Id);
                currentJob = job;
                return true;
            }

            return false;
        }
    }
}
