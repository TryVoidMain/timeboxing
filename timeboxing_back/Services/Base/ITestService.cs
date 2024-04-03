using timeboxing_back.Types;

namespace timeboxing_back.Services.Base
{
    public interface ITestService
    {
        Day GetTestDay(DateOnly date);
        Insights GetTestInsights(DateOnly date);
    }
}
