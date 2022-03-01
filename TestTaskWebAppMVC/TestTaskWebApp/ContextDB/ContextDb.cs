using Microsoft.EntityFrameworkCore;
using TestTaskWebApp.Models;

namespace TestTaskWebApp.ContextDB
{
    public class ContextDb : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        public ContextDb(DbContextOptions<ContextDb> options)
             : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().HasKey(u => u.MobilePhone);
        }
    }
}
