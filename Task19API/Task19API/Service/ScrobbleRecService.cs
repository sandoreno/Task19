using System.Numerics;
using Task19API.Data;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Service
{
    public class ScrobbleRecService : IScrobbleRec
    {
        private readonly IGroupDescription _desc;
        private readonly INormalize _norm;

        public ScrobbleRecService(IGroupDescription desc,
                                  INormalize norm)
        {
            _desc = desc;
            _norm = norm;
        }

        public async Task<List<GroupModel>> ScrobbleRec(HttpResponseMessage? response)
        {
            var scrobble = await _norm.NormalizeResponse(response);
            var scrobbleGroups = await _desc.groupsDesc(scrobble);
            return scrobbleGroups;
        }
    }
}
