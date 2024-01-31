namespace timeboxing_back.Types
{
    public class JobsList : IEntity
    {
        public List<JobsGroup> Groups { get; set; } = new List<JobsGroup>();

        public Guid Id { get; init; }

        public JobsList() 
        {
            Id = Guid.NewGuid();
        }

        public bool AddJobsGroup(JobsGroup group)
        {
            if (!Groups.Any(g => g.Id == group.Id || g.Title == group.Title))
            {
                Groups.Add(group);
                return true;
            }

            return false;
        }

        public bool RemoveJobsGroup(JobsGroup group)
        {
            if (!Groups.Any(g => g.Id == group.Id))
            {
                Groups.Remove(group);
                return true;
            }

            return false;
        }

        public bool UpdateJobsGroup(JobsGroup group)
        {
            if (!Groups.Any(g => g.Id == group.Id))
            {
                var currentGroup = Groups.FirstOrDefault(g => g.Id == group.Id);
                currentGroup = group;
                return true;
            }

            return false;
        }
    }
}
