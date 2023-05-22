using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
using Task19API.Data;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Service
{
    public class UserIdentifyService : IUser
    {
        private readonly DataContext _context;

        public UserIdentifyService(DataContext context)
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
            catch (Exception ex) 
            { 
                Console.WriteLine(ex.Message);
                return null;
            }
        }
    }
}
