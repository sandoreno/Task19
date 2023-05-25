using Task19API.DTOs;
using Task19API.Interface;

namespace Task19API.Service
{
    public class GroupResponseService : IGroupResponse
    {
        private readonly IScrobbleRec _scrobble;

        public GroupResponseService(IScrobbleRec scrobble)
        {
            _scrobble = scrobble;
        }
        public async Task<UserGroupsResponse> Response(List<GroupModel> visited, HttpResponseMessage response)
        {
            var userGroups = new UserGroupsResponse();
            userGroups.visitedGroups = visited;
            userGroups.ScrobbleRecommendation = await _scrobble.ScrobbleRec(response);
            return userGroups;
        }
    }
}
