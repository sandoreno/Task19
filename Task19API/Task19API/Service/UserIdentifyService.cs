using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Globalization;
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
                //зайти как зареганный юзер
                if (!user.AsRegistred)
                {
                    return null;
                }
                //var countUser = 0; 
                //var birthDate = DateOnly.ParseExact(user.BirthDate, "dd.MM.yyyy", CultureInfo.InvariantCulture);
                var userModel = await _context.Users
                    .FirstOrDefaultAsync();
                //var countUsers = await _context.Users
                //    .Where(x=>x.Birthdate == birthDate)
                //    .ToListAsync();
                //countUser = countUsers.Count();
                //var random = new Random();
                //var Id = random.Next(0, countUser);
                //var userId = countUsers[Id].UniqueNumber;
                return userModel.UniqueNumber;
            }
            catch (Exception ex) 
            { 
                Console.WriteLine(ex.Message);
                return null;
            }
        }
    }
}
