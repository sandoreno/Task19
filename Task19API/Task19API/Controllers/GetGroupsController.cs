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

        public GetGroupsController(IUserGroups userGroups, IGroupDescription desc)
        {
            _userGroups = userGroups;
            _desc = desc;
        }

        [HttpPost("/getGroups")]
        public async Task<ActionResult<UserGroupsResponse>> UserGroups(UserFilter user)
        {
            try
            {
                var visitedGroups = await _userGroups.GetUserGroups(user.UniqueNumber);
                var visitedDesc = await _desc.groupsDesc(visitedGroups);

                //using var client = new HttpClient();
                //var scrobbles = await client.GetAsync($"http://localhost:8000/{user.UniqueNumber}/10");
                //var recommendation = await result.Content.ReadAsStringAsync();

                //var splitedRequest = recommendation.Split(",").Select(x => Convert.ToInt32(x)).ToList();
                var scrobbleGroups = await _desc.groupsDesc(new List<int> { 801357270 }); //splitedRequest here

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
