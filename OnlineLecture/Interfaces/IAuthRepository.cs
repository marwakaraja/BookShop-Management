using OnlineLecture.Model.DTO;
using OnlineLecture.Model;

namespace OnlineLecture.Interfaces
{
    public interface IAuthRepository
    {
        IList<User> GetUsers();

        User Register(User objUser);
        User Login(string email , string password);
        bool UserExist(string email);    

    }
}
