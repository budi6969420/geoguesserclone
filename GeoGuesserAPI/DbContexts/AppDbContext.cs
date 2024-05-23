using GeoGuesserAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GeoGuesserAPI.DbContexts
{
    public class AppDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<MapModel> Maps => Set<MapModel>();
    }
}
