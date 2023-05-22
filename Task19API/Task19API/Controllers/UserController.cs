using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        [HttpPost("/UserGroups")]
        public async Task<ActionResult<List<int>>> GetUsersGroup([FromQuery]UserDataDTO userDTO)
        {
            return await _userGroup.GetUserGroups(userDTO);
        }
    }
}
