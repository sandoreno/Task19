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
        private readonly IUser _userGroup;

        public UserController(IUser userGroup)
        {
            _userGroup = userGroup;
        }

        [HttpPost("/getUser")]
        public async Task<ActionResult<int>> UserIdentify(UserDataResponse user)
        {
            try
            {
                // получаем юзера по входным данным
                var userId = await _userGroup.GetUser(user);
                if (userId == null)
                {
                    throw new Exception("not user");
                }

                using var client = new HttpClient();

                var result = await client.GetAsync($"http://localhost:8000/{userId}/10");
                var content = await result.Content.ReadAsStringAsync();
                return Ok(content);
            }
            catch (Exception ex)
            { 
                return BadRequest(ex.Message);
            }
        }
    }
}
