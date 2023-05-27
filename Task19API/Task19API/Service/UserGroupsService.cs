using Microsoft.EntityFrameworkCore;
using Task19API.Data;
using Task19API.Interface;

namespace Task19API.Service
{
    public class UserGroupsService : IUserGroups
    {
        private readonly DataContext _context;

        public UserGroupsService(DataContext context)
        {
            _context = context;
        }
        public async Task<List<int>> GetUserGroups(int userId)
        {
            var groups = await _context.Scrobbles.Where(x => x.UserId == userId)
                .Include(g => g.Group)
                .Select(g => g.Group.UniqueNumber)
                .Distinct()
                .Take(10)
                .ToListAsync();

            return groups;
        }
    }
}
