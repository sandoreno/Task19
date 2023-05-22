using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
using Task19API.Data;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Service
{
    public class UserGroupService : IUserGroup
    {
        private readonly DataContext _context;

        public UserGroupService(DataContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<List<int>>> GetUserGroups(UserDataDTO userDTO)
        {
            var groups = await _context.Scrobbles.Where(x => x.UserId == userDTO.UserId)
                .Include(g => g.Group)
                .Select(g => g.Group.UniqueNumber)
                .ToListAsync();
            
            return groups;
        }
    }
}
