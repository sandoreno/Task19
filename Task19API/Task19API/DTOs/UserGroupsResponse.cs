namespace Task19API.DTOs
{
    public class UserGroupsResponse
    {
        public List<GroupModel>? visitedGroups { get; set; }
        public List<GroupModel>? ScrobbleRecommendation { get; set; }
    }
}
