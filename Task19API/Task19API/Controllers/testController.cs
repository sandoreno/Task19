using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task19API.Data;
using Task19API.Models;

namespace Task19API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class testController : ControllerBase
    {
        private readonly DataContext _context;

        public testController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Group?>> GetGroups(int id)
        {
            var users = await _context.Groups.FindAsync(id);
            return users;
        }

        [HttpGet]
        public async Task<ActionResult<List<User?>?>> GetUsers(string sex)
        {
            var user = await _context.Users.Where(x => x.Sex == sex).ToListAsync();
            return user;
        }
    }
}
