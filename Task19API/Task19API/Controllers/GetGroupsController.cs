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
    public class GetGroupsController : Controller
    {
        private readonly IUserGroups _userGroups;
        private readonly IGroupDescription _desc;
        private readonly IGroupResponse _response;
        private readonly INormalize _norm;
        public GetGroupsController(IUserGroups userGroups,
                                   IGroupDescription desc,
                                   IGroupResponse response,
                                   INormalize norm)
        {
            _userGroups = userGroups;
            _desc = desc;
            _response = response;
            _norm = norm;
        }

        [HttpPost("/getGroups")]
        public async Task<ActionResult<UserGroupsResponse>> UserGroups(UserFilter user)
        {
            try
            {
                //dont touch
                var visitedGroups = await _userGroups.GetUserGroups(user.UniqueNumber);
                var visitedDesc = await _desc.groupsDesc(visitedGroups);
                //

                using var client = new HttpClient();
                var scrobblesResponse = await client.GetAsync($"http://host.docker.internal:8000/recommend_for_user/{user.UniqueNumber}/10");
                //var scrobble = await _norm.NormalizeResponse(scrobblesResponse);

                //var scrobbleGroups = await _desc.groupsDesc(new List<int> { 801347688 });

                var userGroups = await _response.Response(visitedDesc, scrobblesResponse);

                //UserGroupsResponse userGroupsResponse = new UserGroupsResponse();
                //userGroupsResponse.ScrobbleRecommendation = scrobbleGroups;
                //userGroupsResponse.visitedGroups = visitedDesc;

                return Ok(userGroups);            //userGroups <--> userGroupsResponse                                                     
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
