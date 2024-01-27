using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using timeboxing_back.Types;

namespace timeboxing_back.Controllers
{
    [ApiController]
    public class RestApiController : ControllerBase
    {
        public RestApiController() 
        {
            
        }

        [HttpGet("/api/getinsights")]
        [Consumes(MediaTypeNames.Application.Json)]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Insights))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Insights> GetInsights()
        {
            return new Insights() 
            { 
                InsightsList = new List<string>()
                {
                    "first string",
                    "second string",
                    "third string"
                }
            };
        }

        [HttpGet("/api/getday/{date}")]
        [Consumes(MediaTypeNames.Application.Json)]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Day))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Day> GetDay([FromRoute(Name = "date")] string date)
        {
            var reqDate = DateOnly.Parse(date);

            return new Day(reqDate) { };
        }
    }
}
