using Task19API.Data;
using Task19API.Interface;

namespace Task19API.Service
{
    public class TestService : ITest
    {
        private readonly DataContext _context;

        public TestService(DataContext context)
        {
            _context = context;
        }

        public Task<string> test()
        {
            throw new NotImplementedException();
        }
    }
}
