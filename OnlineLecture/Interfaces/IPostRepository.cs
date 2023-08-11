using OnlineLecture.Model;
using OnlineLecture.Model.DTO;

namespace OnlineLecture.Interfaces
{
    public interface IPostRepository
    {
        Task<IList<Post>> GetPost();
        Post GetPostID(int ID);
        Post InsertPost(Post objPost);
        Post UpdatePost(Post objPost);
        bool DeletePost(int ID);
    }
}
