using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using Task19API.DTOs;
using Task19API.Interface;

namespace Task19API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VectorController : ControllerBase
    {
        private readonly IVector _vector;
        private readonly IGroupDescription _desc;

        public VectorController(IVector vector, IGroupDescription desc)
        {
            _vector = vector;
            _desc = desc;
        }

        [HttpPost]
        public async Task<ActionResult<List<GroupModel>>> CreateVector(TestModelResponse model)
        {
            try
            {
                var vector = await _vector.Vector(model);
                string srt = String.Join(",", vector);
                using var client = new HttpClient();
                var scrobbles = await client.GetAsync($"http://localhost:8000/recommend/{srt}/10");
                var recommendation = await scrobbles.Content.ReadAsStringAsync();                                 
                recommendation = recommendation.Replace("[", "").Replace("]", "");
                var splitedRequest = recommendation.Split(",").Select(x => Convert.ToInt32(x)).ToList();
                var scrobbleGroups = await _desc.groupsDesc(splitedRequest);
                return scrobbleGroups;
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
