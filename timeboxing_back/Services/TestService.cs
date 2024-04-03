using timeboxing_back.Types;
using timeboxing_back.Services.Base;

namespace timeboxing_back.Services
{
    public class TestService : ITestService
    {
        public TestService() { }

        public Day GetTestDay(DateOnly date)
        {
            var dateString = date.ToShortDateString();

            return new(date)
            {
                Insights = new()
                {
                    InsightsList = new()
                    {
                        $"first insight from day {dateString}",
                        $"second insight from day {dateString}",
                        $"third insight from day {dateString}",
                        $"fourth insight from day {dateString}"
                    }
                },
                JobsList = new()
                {
                    Groups = new()
                    {
                        new("Work group 1")
                        {
                            Jobs = new()
                            {
                                new("work group job 1"),
                                new("work group job 2", "work group job 2 description"),
                                new("work group job 3")
                            }
                        },
                        new("Work group 2")
                        {
                            Jobs = new()
                            {
                                new("work group job 1"),
                                new("work group job 2", "work group job 2 description"),
                                new("work group job 3")
                            }
                        }
                    }
                },
                DailyJobs = new()
                {
                    Jobs = new Job[3]
                    {
                        new("work daily job 1"),
                        new("work daily job 2"),
                        new("work daily job 3")
                    }
                },
                Schedule = new()
                {
                    Blocks = new()
                    {
                        new(new("schedule job 1"), new TimeOnly(12, 0), new TimeOnly(15, 0)),
                        new(new("schedule job 2"), new TimeOnly(16, 0), new TimeOnly(17, 0)),
                        new(new("schedule job 3"), new TimeOnly(9, 0), new TimeOnly(11, 0))
                    }
                }
            };
        }

        public Insights GetTestInsights(DateOnly date)
        {
            var dateString = date.ToShortDateString();

            return new Insights()
            {
                InsightsList = new List<string>()
                {
                    $"first insight string for day {dateString}",
                    $"second insight string for day {dateString}",
                    $"third insight string for day {dateString}"
                }
            };
        }
    }
}
