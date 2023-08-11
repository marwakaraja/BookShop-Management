using Microsoft.EntityFrameworkCore;
using OnlineLecture.Model;

namespace OnlineLecture.Data
{
    public class MyAppContext : DbContext
    {
        public MyAppContext(DbContextOptions<MyAppContext> options) : base(options)
        { }
        public DbSet<User> Users { get; set; }
        public DbSet<Subject> Subjects { get; set; }

        public DbSet<Lecture> Lectures { get; set; }
        public DbSet<Post> Posts { get; set; }



    }
}
