using System.Text.Json.Serialization;

namespace timeboxing_back.Types
{
    public class Insights
    {
        [JsonPropertyName(nameof(InsightsList))]
        public List<string> InsightsList { get; set; } = new List<string>();
        public Insights() { }
    }
}
