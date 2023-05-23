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
        private readonly IUnique _unique;

        public GetGroupsController(IUserGroups userGroups, IUnique unique)
        {
            _userGroups = userGroups;
            _unique = unique;
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

        [HttpPost("/getUniqueNumber")]
        public async Task<ActionResult<List<GroupModel>>> UniqueNumber(List<int> uniqueIds)
        {
            try
            {
                var groups = await _unique.uniqueIds(uniqueIds);
                if (groups == null)
                {
                    throw new Exception("shel nahyi");
                }
                return Ok(groups);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }
        }
    }
}
