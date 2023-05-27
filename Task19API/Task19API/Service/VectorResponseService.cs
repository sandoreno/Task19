using Task19API.Data;
using Task19API.DTOs;
using Task19API.Interface;

namespace Task19API.Service
{
    public class Normalize : INormalize
    {
        private readonly IGroupDescription _desc;

        public Normalize(IGroupDescription description)
        {
            _desc = description;
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
