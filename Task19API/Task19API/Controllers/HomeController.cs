using Microsoft.AspNetCore.Mvc;
using Task19API.DTOs;

namespace Task19API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {

        [HttpGet("/home")]
        public async Task<ActionResult<string>> GetHome()
        {
            try
            {
                return Ok("run back");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
