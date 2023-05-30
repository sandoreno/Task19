using Microsoft.EntityFrameworkCore;
using System.Numerics;
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

        public async Task<VectorModel> Vector(TestModelResponse model)
        {
            try
            {
                var modelIds = await _context.Answertolvls
                        .Where(x => model.AnswerId
                        .Contains((int)x.AnswerId))
                        .Select(x => x.GroupId)
                        .ToListAsync();

                var dict = await _context.Dicts
                        //.OrderBy(x => x.IdLevel3)
                        //.Select(x => modelIds.Contains(x.IdLevel3)?10:0)
                        .Where(x => modelIds.Contains(x.IdLevel3))
                        .Select(x => x.Level3)
                        .ToListAsync();

                var contextGroups = await _context.Groups.ToListAsync();
                var uniqueNumber = contextGroups
                    .Where(x => dict.Contains(x.DirectionThree))
                    .Select(x => x.UniqueNumber)
                    .Distinct()
                    .ToList();

                var contextItemsToid = await _context.ItemToIds.ToListAsync();
                var ids = contextItemsToid
                    .Where(x => uniqueNumber.Contains(x.UniqueNumber))
                    .Select(x => x.Id)
                    .ToList();


                var idlevel3 = await _context.Dicts
                    .Where(x => modelIds.Contains(x.IdLevel3))
                    .Select(x => x.Level3)
                .ToListAsync();

                string srt = String.Join(" ", idlevel3)
                    .Replace(":", " ")
                    .Replace("?", " ")
                    .Replace("!", " ")
                    .Replace(";", " ")
                    .Replace(".", " ")
                    .Replace(",", " ")
                    .Replace("ОНЛАЙН", "")
                    .Replace("-", " ")
                    .Replace("(", " ")
                    .Replace("/", " ")
                    .Replace(")", " ")
                    .Replace("=", " ")
                    .ToLower();

                VectorModel vector = new VectorModel();
                vector.vector = ids;
                vector.level3 = srt;

                return vector;
            }
            catch (Exception ex)
            {
                throw new Exception("bad");

            }
        }
    }
}
