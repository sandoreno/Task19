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
        private readonly IGroupDescription _scrobble;

        public GetGroupsController(IUserGroups userGroups, IGroupDescription unique)
        {
            _userGroups = userGroups;
            _scrobble = unique;
        }

        [HttpPost("/getGroups")]
        public async Task<ActionResult<UserGroupsResponse>> UserGroups(UserFilter user)
        {
            try
            {
                var visitedGroups = await _userGroups.GetUserGroups(user.UniqueNumber);
                var visitedDesc = await _scrobble.groupsDesc(visitedGroups);

                //using var client = new HttpClient();
                //var result = await client.GetAsync($"http://localhost:8000/{user.UniqueNumber}/10");
                //var content = await result.Content.ReadAsStringAsync();

                //var splitedRequest = content.Split(",").Select(x => Convert.ToInt32(x)).ToList();
                var scrobbleGroups = await _scrobble.groupsDesc(new List<int> { 801357270 });

                var groupResponse = new UserGroupsResponse();
                groupResponse.ScrobbleRecommendation = scrobbleGroups;
                groupResponse.visitedGroups = visitedDesc;

                return Ok(groupResponse);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
