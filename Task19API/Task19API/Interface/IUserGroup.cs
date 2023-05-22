using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using Task19API.DTOs;
using Task19API.Models;

namespace Task19API.Interface
{
    public interface IUserGroup
    {
        public Task<ActionResult<List<int>>> GetUserGroups(UserDataDTO userDTO);
    }
}
