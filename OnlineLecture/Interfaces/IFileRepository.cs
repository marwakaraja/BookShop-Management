using OnlineLecture.Model.DTO;
using OnlineLecture.Model;

namespace OnlineLecture.Interfaces
{
    public interface IFileRepository
    {
        string SaveFile(IFormFile file);
        bool DeleteFile(string filename);
    }
}
