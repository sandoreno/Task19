using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using Task19API.DTOs;
using Task19API.Models;

namespace Task19API.Interface
{
    public interface IUser
    {
        public Task<int?> GetUser(UserDataResponse user);
    }
}
