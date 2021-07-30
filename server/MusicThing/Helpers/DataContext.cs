using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MusicThing.Entities;

namespace MusicThing.Helpers
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        private readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("TestDb");
        }
    }
}