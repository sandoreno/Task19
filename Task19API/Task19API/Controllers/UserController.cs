using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Text.RegularExpressions;
using Task19API.Data;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IUserGroup _userGroup;

        public UserController(DataContext context, IUserGroup userGroup)
        {
            _context = context;
            _userGroup = userGroup;
        }

        [HttpPost("/getUser")]
        public async Task<ActionResult<List<int>>> GetUsersGroup(UserDataResponse user)
        {
            try
            {
                // получаем юзера по входным данным
                var userId = await _userGroup.GetUser(user);
                if (userId == null)
                {
                    throw new Exception("not user");
                }
                else {
                    var groups = await _userGroup.GetUserGroups((int)userId);
                    return Ok(groups);
                }
            }
            catch (Exception ex)
            { 
                return BadRequest(ex.Message);
            }
        }
    }
}
