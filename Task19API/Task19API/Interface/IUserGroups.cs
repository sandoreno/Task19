namespace Task19API.Interface
{
    public interface IUserGroups
    {
        public Task<List<int>> GetUserGroups(int userId);
    }
}
