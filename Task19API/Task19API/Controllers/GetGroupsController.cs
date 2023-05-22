using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetGroupsController : ControllerBase
    {
        private readonly IUserGroups _userGroups;

        public GetGroupsController(IUserGroups userGroups)
        {
            _userGroups = userGroups;
        }

        [HttpPost("/getGroups")]
        public async Task<ActionResult<List<int>>> UserGroups(int id)
        {
            try
            {
                var groups = await _userGroups.GetUserGroups(id);
                return Ok(groups);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
