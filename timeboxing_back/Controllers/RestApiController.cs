﻿using Microsoft.AspNetCore.Mvc;
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

        [HttpGet("/api/getday")]
        [Consumes(MediaTypeNames.Application.Json)]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Day))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Day> GetDay([FromQuery(Name = "date")] string date)
        {
            var reqDate = DateOnly.Parse(date);

            return new Day(reqDate) 
            { 
                Insights = new Insights()
                {
                    InsightsList = new List<string>()
                    {
                        "first insight from day",
                        "second insight from day",
                        "third insight from day",
                        "fourth insight from day"
                    }
                },
                JobsList = new JobsList() 
                {
                    Groups = new List<JobsGroup>()
                    {
                        new JobsGroup("Work group 1")
                        {
                            Jobs = new List<Job>()
                            {
                                new Job("work group job 1"),
                                new Job("work group job 2", "work group job 2 description"),
                                new Job("work group job 3")
                            }
                        },
                        new JobsGroup("Work group 2")
                        {
                            Jobs = new List<Job>()
                            {
                                new Job("work group job 1"),
                                new Job("work group job 2", "work group job 2 description"),
                                new Job("work group job 3")
                            }
                        }
                    }
                },
                DailyJobs = new DailyJobs()
                {
                    Jobs = new Job[3]
                    {
                        new Job("work daily job 1"),
                        new Job("work daily job 2"),
                        new Job("work daily job 3")
                    }
                },
                Schedule = new Schedule()
                {
                    Blocks =
                    {
                        new ScheduleBlock(new Job("schedule job 1"), new TimeOnly(12, 0), new TimeOnly(15, 0)),
                        new ScheduleBlock(new Job("schedule job 2"), new TimeOnly(16, 0), new TimeOnly(17, 0))
                    }
                }
            };
        }
    }
}
