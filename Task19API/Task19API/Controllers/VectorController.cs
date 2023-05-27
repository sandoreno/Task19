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
        private readonly INormalize _norm;
        private readonly IGroupDescription _desc;

        public VectorController(IVector vector,
                                INormalize norm,
                                IGroupDescription desc)
        {
            _vector = vector;
            _norm = norm;
            _desc = desc;
        }

        [HttpPost("/vector")]
        public async Task<ActionResult<VectorResponse>> VectorRec(TestModelResponse model)
        {
            try
            {
                var vectorResponse = new VectorResponse();

                var vector = await _vector.Vector(model);
                string toResponse = String.Join(",", vector.vector);
                
                using var client = new HttpClient();

                //var vectorString = await client.GetAsync($"http://localhost:8000/recommend/{toResponse}/10");
                //var level3 = await client.GetAsync($"http://localhost:8000/find_similar/{vector.level3}");

                //var normVector = await _norm.NormalizeResponse(vectorString);
                //var normFuture = await _norm.NormalizeResponse(level3);

                //vectorResponse.vectorRec = await _desc.groupsDesc(normVector);
                //vectorResponse.newRec = await _desc.groupsDesc(normFuture);
                var list1 = new List<int> { 801357282, 801373830, 801371594, 801370979, 801370874 };
                var list2 = new List<int> { 801350310, 801371388, 801371686, 801370979, 801368178 };
                vectorResponse.vectorRec = await _desc.groupsDesc(list1);
                vectorResponse.newRec = await _desc.groupsDesc(list2);

                return vectorResponse;
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
