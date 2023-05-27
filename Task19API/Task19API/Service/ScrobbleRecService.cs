﻿using System.Numerics;
using Task19API.Data;
using Task19API.DTOs;
using Task19API.Interface;
using Task19API.Models;

namespace Task19API.Service
{
    public class ScrobbleRecService : IScrobbleRec, INormalize
    {
        private readonly IGroupDescription _desc;
        public ScrobbleRecService(IGroupDescription desc)
        {
            _desc = desc;
        }

        public async Task<List<GroupModel>> ScrobbleRec(HttpResponseMessage? response)
        {
            var scrobble = await NormalizeResponse(response);
            var scrobbleGroups = await _desc.groupsDesc(scrobble);
            return scrobbleGroups;
        }
        public async Task<List<int>> NormalizeResponse(HttpResponseMessage responseMessage)
        {
            var strResp = await responseMessage.Content.ReadAsStringAsync();
            strResp = strResp.Replace("[", "").Replace("]", "");
            var response = strResp.Split(",").Select(x => Convert.ToInt32(x)).ToList();
            return response;
        }

    }
}
