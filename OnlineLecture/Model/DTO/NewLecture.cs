using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace OnlineLecture.Model.DTO
{
    public class NewLecture
    {

       
        [Required]
        public string LectureName { get; set; } = string.Empty;
        [Required]
        public string LectureFileName { get; set; } = string.Empty;
        [NotMapped]
        public IFormFile LectureFile { get; set; }
    }
}
