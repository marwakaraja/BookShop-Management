using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OnlineLecture.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly IWebHostEnvironment env;

        public FilesController(IWebHostEnvironment env)
        {
            this.env = env;
        }

        [HttpGet]
        [Route("Download")]
          public IActionResult Download(string filename)
        {
            var currentPath = Directory.GetCurrentDirectory();
            var path = Path.Combine(currentPath, "Uploads", filename);
            if (!System.IO.File.Exists(path))
            {
               return NotFound("file not found");   
                
            }
            var file = System.IO.File.ReadAllBytes(path);
            return File(file,"application/pdf",Path.GetFileName(path));
        }


        [HttpGet]
        [Route("Read")]
        public void Read(string filename)
        {
            var currentPath = Directory.GetCurrentDirectory();
            var path = Path.Combine(currentPath, "Uploads", filename);
            if (System.IO.File.Exists(path))
            {

                var file = System.IO.File.OpenText(path);

            }
            // return File(file, "application/pdf", Path.GetFileName(path));
        }
    }
}
