using Microsoft.EntityFrameworkCore;
using OnlineLecture.Data;
using OnlineLecture.Interfaces;
using OnlineLecture.Model;
using OnlineLecture.Model.DTO;

namespace OnlineLecture.Repository
{
    public class PostRepository : IPostRepository
    {
        private readonly MyAppContext context;

        public PostRepository(MyAppContext context)
        {
            this.context = context;
        }

        public bool DeletePost(int ID)
        {
            bool result = false;
            var post = context.Posts.Find(ID);
            if (post != null)
            {
                context.Entry(post).State = EntityState.Deleted;
               context.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }

        public async Task<IList<Post>> GetPost()
        {
            return await context.Posts.ToListAsync();
        }

        public  Post GetPostID(int ID)
        {
            return  context.Posts.FirstOrDefault(p => p.PostId == ID);
        }

        public  Post InsertPost(Post objPost)
        {
            context.Posts.Add(objPost);
             context.SaveChanges();
            return objPost;
        }

        public Post UpdatePost(Post objPost)
        {

            context.Posts.Update(objPost);
            context.SaveChanges();
            return objPost;
        }
    }
}
