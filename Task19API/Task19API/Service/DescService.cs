using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task19API.Data;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Service
{
    public class DescService : IGroupDescription
    {
        private readonly DataContext _context;

        public DescService(DataContext context)
        {
            _context = context;
        }
        public async Task<List<GroupModel>> groupsDesc(List<int> ids)
        {
            var uniqueGroups = await _context.Groups
                .Where(x => ids.Contains(x.UniqueNumber))
                .Select(x => new GroupModel(x))
                .ToListAsync();

            return uniqueGroups;
        }
        
    }
}
