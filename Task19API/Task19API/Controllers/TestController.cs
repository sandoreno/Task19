using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task19API.DTOs;
using Task19API.Interface;

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
        public async Task<string> GetTest(QuestionModel model)
        {

            return null;
        }
    }
}
