using OnlineLecture.Interfaces;

namespace OnlineLecture.Repository
{
    public class FileRepository : IFileRepository
    {
        private readonly IWebHostEnvironment env;

        public FileRepository(IWebHostEnvironment env)
        {
            this.env = env;
        }

        public bool DeleteFile(string filename)
        {
            var currentPath = Directory.GetCurrentDirectory();
            var path= Path.Combine(currentPath, "Uploads", filename);  
            if(System.IO.File.Exists(path))
            {
                System.IO.File.Delete(path);
                return true;
            }
            return false;

        }

        public string SaveFile(IFormFile file)
        {
            var currentPath = this.env.ContentRootPath;
            var path=Path.Combine(currentPath, "Uploads");
            if(!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);    

            }
            var ext=Path.GetExtension(file.FileName);    
            string uniquestring=Guid.NewGuid().ToString();
            var newfilename = uniquestring + ext;
            var filewithpath=Path.Combine(path, newfilename);
            using (var stream = new FileStream(filewithpath,FileMode.Create)) 
            {
                file.CopyTo(stream);

            }
            return newfilename;
        }
    }
}
