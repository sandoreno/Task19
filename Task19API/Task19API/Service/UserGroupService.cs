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

        public async Task<int?> GetUser(UserDataResponse user)
        {
            try
            {
                var countUser = 0;
                var countUsers = await _context.Users
                    .ToListAsync();
                countUser = countUsers.Count();
                var random = new Random();
                var Id = random.Next(0, countUser);
                var userId = countUsers[Id].UniqueNumber;
                //var userId = await _context.Users
                //    .Where(x => x.UniqueNumber == Id)
                //    .Select(x => x.UniqueNumber)
                //    .FirstOrDefaultAsync();
                return userId;
            }
            catch (Exception ex) { 
                Console.WriteLine(ex.Message);
                return null;
            }


        }

        public async Task<List<int>> GetUserGroups(int userId)
        {
            var groups = await _context.Scrobbles.Where(x => x.UserId == userId)
                .Include(g => g.Group)
                .Select(g => g.Group.UniqueNumber)
                .ToListAsync();
            
            return groups;
        }
    }
}
