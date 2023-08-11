using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineLecture.Interfaces;
using OnlineLecture.Model;
using OnlineLecture.Model.DTO;

namespace OnlineLecture.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostRepository postRepository;

        public PostsController(IPostRepository postRepository)
        {
            this.postRepository = postRepository;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await postRepository.GetPost());
        }

        [HttpGet]
        [Route("{Id}")]
        public IActionResult GetDeptById(int Id)
        {
            return Ok( postRepository.GetPostID(Id));
        }
        [HttpPost]
        public IActionResult Post(NewPost newpost)
        {
            var Newpost = new Post
            {
                PostTitle = newpost.PostTitle,
                PostBody = newpost.PostBody

            };
            var result =  postRepository.InsertPost(Newpost);
            if(result !=null)
           
            return Ok("Added Successfully");

            return BadRequest(result);
        }
        [HttpPut("{postid}")]
        
        public IActionResult Put(int postid,NewPost post)
        {
            var currentpost = postRepository.GetPostID(postid);
             if(currentpost == null)  return NotFound();
            currentpost.PostTitle = post.PostTitle;
            currentpost.PostBody = post.PostBody;
            var result= postRepository.UpdatePost(currentpost);
         
            return Ok("Updated Successfully");

            
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var result=postRepository.DeletePost(id);
            if(result)
            return Ok("Deleted Successfully");

            return BadRequest("not deleted");
        }
    }
}
