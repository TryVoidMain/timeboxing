namespace timeboxing_back.Types
{
    public interface IJobsCollection
    {
        bool AddJob(Job job);
        bool RemoveJob(Job job);
        bool UpdateJob(Job job);
    }
}
