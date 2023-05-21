using Microsoft.EntityFrameworkCore;

namespace Task19API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
       : base(options) { }

        //public DbSet<TestModel>? TestModel { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.ApplyConfiguration(new TestModelConfiguration());
        //}
    }
}
