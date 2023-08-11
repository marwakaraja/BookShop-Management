using Microsoft.EntityFrameworkCore;
using OnlineLecture.Data;
using OnlineLecture.Interfaces;
using OnlineLecture.Model;
using OnlineLecture.Model.DTO;

namespace OnlineLecture.Repository
{
    public class AuthRepository : IAuthRepository
    {
        private readonly MyAppContext context;

        public AuthRepository( MyAppContext context)
        {
            this.context = context;
        }

        public IList<User> GetUsers()
        {
           
               return context.Users.ToList();  
                
           
        }

        public User Login(string email, string password)
        {
            var user= context.Users.FirstOrDefault(x => x.Email == email);
            if(user == null)
            { return null; }
            return user;
        }

        public User Register(User objUser)
        {
            context.Users.Add(objUser);
            context.SaveChanges();
            return objUser;
                }

        public bool UserExist(string email)
        {
            if(context.Users.Any(u=>u.Email==email))
            {
                return true;
            }
            return false;
        }
    }
}
