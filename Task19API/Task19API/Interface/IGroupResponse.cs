using Task19API.DTOs;

namespace Task19API.Interface
{
    public interface IGroupResponse
    {
        public Task<UserGroupsResponse> Response(List<GroupModel> visited, HttpResponseMessage response);
    }
}
