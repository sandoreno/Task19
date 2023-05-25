using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetGroupsController : ControllerBase
    {
        private readonly IUserGroups _userGroups;
        private readonly IGroupDescription _desc;
        private readonly IGroupResponse _response;

        public GetGroupsController(IUserGroups userGroups,
                                   IGroupDescription desc,
                                   IGroupResponse response)
        {
            _userGroups = userGroups;
            _desc = desc;
            _response = response;
        }

        [HttpPost("/getGroups")]
        public async Task<ActionResult<UserGroupsResponse>> UserGroups(UserFilter user)
        {
            try
            {
                var visitedGroups = await _userGroups.GetUserGroups(user.UniqueNumber);
                var visitedDesc = await _desc.groupsDesc(visitedGroups);

                using var client = new HttpClient();
                var scrobbles = await client.GetAsync($"http://localhost:8000/recommend/{user.UniqueNumber}/10");

                var userGroups = _response.Response(visitedDesc, scrobbles);
                
                return Ok(userGroups);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
