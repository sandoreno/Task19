using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly ITest _test;

        public TestController(ITest test)
        {
            _test = test;
        }

        [HttpPost("/getTest")]
        public async Task<ActionResult<TestModel>> GetTest(TestModelResponse model)
        {
            try
            {
                var visitedGroups = await _test.GetTest(model);
                return visitedGroups;
            }
            catch (Exception ex) {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }
        }
    }
}
