namespace timeboxing_back.Types
{
    public class JobsGroup : IEntity, IJobsCollection
    {
        public Guid Id { get; init; }
        public List<Job> Jobs { get; set; }
        public string Title { get; set; }

        public JobsGroup(string title)
        {
            Id = Guid.NewGuid();
            Title = title;
            Jobs = new List<Job>();
        }

        public bool AddJob(Job job)
        {
            if (!Jobs.Any(j => j.Id == job.Id || j.Title.ToLower() == job.Title.ToLower()))
            {
                Jobs.Add(job);
                return true;
            }

            return false;
        }

        public bool RemoveJob(Job job)
        {
            if (Jobs.Any(j => j.Id == job.Id))
                return Jobs.Remove(Jobs.First(j => j.Id == job.Id));

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
