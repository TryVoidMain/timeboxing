namespace timeboxing_back.Types
{
    public class DailyJobs : IJobsCollection
    {
        private Job[] jobs = new Job[3];

        public DailyJobs() { }

        public bool AddJob(Job job)
        {
            if (jobs.Any(j => j.Id == job.Id))
            {
                var currentJob = jobs.FirstOrDefault(j => j.Id == job.Id);
                currentJob = job;
                return true;
            }

            return false;
        }

        public bool RemoveJob(Job job)
        {
            if (jobs.Any(j => j.Id == job.Id))
            {
                var currentJob = jobs.FirstOrDefault(i => i.Id == job.Id);
                currentJob = null;
                return true;
            }

            return false;
        }

        public bool UpdateJob(Job job)
        {
            if (jobs.Any(j => j.Id == job.Id))
            {
                var currentJob = jobs.First(j => j.Id == job.Id);
                currentJob = job;
                return true;
            }

            return false;
        }
    }
}
