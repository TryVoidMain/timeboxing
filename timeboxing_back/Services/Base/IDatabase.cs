using timeboxing_back.Types;

namespace timeboxing_back.Services
{
    public interface IDatabase
    {
        Task<Schedule> GetSchedule(Guid id);
        Task<DailyJobs> GetDailyJobs(Guid id);
        Task<JobsList> GetJobsList(Guid id);
        Task<Day> GetDay(DateOnly date);

        Task SaveDay(Day day);
        Task DeleteDay(DateOnly date);

    }
}
