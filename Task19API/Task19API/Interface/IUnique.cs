using Microsoft.AspNetCore.Mvc;
using Task19API.DTOs;

namespace Task19API.Interface
{
    public interface IUnique
    {
        public Task<List<GroupModel>> uniqueIds(List<int> ids);
    }
}
