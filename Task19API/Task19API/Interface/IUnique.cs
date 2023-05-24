using Microsoft.AspNetCore.Mvc;
using Task19API.DTOs;

namespace Task19API.Interface
{
    public interface IGroupDescription
    {
        public Task<List<GroupModel>> groupsDesc(List<int> ids);
    }
}
