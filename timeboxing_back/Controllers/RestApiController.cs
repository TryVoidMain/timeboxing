using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using timeboxing_back.Services.Base;
using timeboxing_back.Types;

namespace timeboxing_back.Controllers
{
    [ApiController]
    public class RestApiController : ControllerBase
    {
        private readonly ITestService _testService;
        public RestApiController(ITestService testService) 
        {
            _testService = testService;
        }

        [HttpGet("/api/getinsights")]
        [Consumes(MediaTypeNames.Application.Json)]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Insights))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Insights> GetInsights([FromQuery(Name = "date")] string date)
        {
            var reqDate = DateOnly.Parse(date);

            return _testService.GetTestInsights(reqDate);
        }

        [HttpGet("/api/getday")]
        [Consumes(MediaTypeNames.Application.Json)]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Day))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Day> GetDay([FromQuery(Name = "date")] string date)
        {
            var reqDate = DateOnly.Parse(date);

            return _testService.GetTestDay(reqDate);
        }
    }
}
