using Task19API.DTOs;

namespace Task19API.Interface
{
    public interface IScrobbleRec
    {
        public Task<List<GroupModel>> ScrobbleRec(HttpResponseMessage? response);
    }
}
