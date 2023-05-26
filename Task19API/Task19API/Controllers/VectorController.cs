using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task19API.DTOs;
using Task19API.Interface;

namespace Task19API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VectorController : ControllerBase
    {
        private readonly IVector _vector;

        public VectorController(IVector vector)
        {
            _vector = vector;
        }

        [HttpPost]
        public async Task<ActionResult<List<int>>> CreateVector(TestModelResponse model)
        {
            try
            {
                var vector = await _vector.Vector(model);
                
                return vector;
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
