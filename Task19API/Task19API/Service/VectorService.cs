using Microsoft.EntityFrameworkCore;
using Task19API.Data;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Service
{
    public class VectorService : IVector
    {
        private readonly DataContext _context;

        public VectorService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<int>> Vector(TestModelResponse model)
        {
            try
            {
                var groupIds = await _context.Answertolvls
                        .Where(x => model.AnswerId
                        .Contains((int)x.AnswerId))
                        .Select(x => x.GroupId)
                        .ToListAsync();

                var dict = await _context.Dicts
                        //.OrderBy(x => x.IdLevel3)
                        .Select(x => groupIds.Contains(x.IdLevel3)?1:0)
                        .ToListAsync();

                return dict;
            }
            catch (Exception ex)
            {
                throw new Exception("bad");

            }
        }
    }
}
