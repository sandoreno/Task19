using Task19API.Data;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Service
{
    public class ScrobbleRecService : IScrobbleRec
    {
        private readonly IGroupDescription _desc;
        public ScrobbleRecService(IGroupDescription desc)
        {
            _desc = desc;
        }

        public async Task<List<GroupModel>> ScrobbleRec(HttpResponseMessage? response)
        {
            var recommendation = await response.Content.ReadAsStringAsync();
            recommendation = recommendation.Replace("[", "").Replace("]", "");
            var splitedRequest = recommendation.Split(",").Select(x => Convert.ToInt32(x)).ToList();
            var scrobbleGroups = await _desc.groupsDesc(splitedRequest);
            return scrobbleGroups;
        }
    }
}
