using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineLecture.Model
{
    public class Lecture
    {
        [Key]
        public int LectureId { get; set; }
        [Required]
        public string LectureName { get; set; } = string.Empty;
        [Required]
        public string LectureFileName { get; set; } = string.Empty;
        [NotMapped]
        public IFormFile LectureFile { get; set; }

        public int Subjectid { get; set; }
    }
}
