using Task19API.DTOs;

namespace Task19API.Interface
{
    public interface ITest
    {
        public Task<TestModel> GetTest(TestModelResponse question);
    }
}
