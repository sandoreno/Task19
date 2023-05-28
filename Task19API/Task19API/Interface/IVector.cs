using Task19API.DTOs;

namespace Task19API.Interface
{
    public interface IVector
    {
        public Task<VectorModel> Vector(TestModelResponse model);
    }
}
