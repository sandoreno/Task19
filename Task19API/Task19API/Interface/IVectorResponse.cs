using Task19API.DTOs;

namespace Task19API.Interface
{
    public interface INormalize
    {
        public Task<List<int>> NormalizeResponse(HttpResponseMessage responseMessage);
    }
}
