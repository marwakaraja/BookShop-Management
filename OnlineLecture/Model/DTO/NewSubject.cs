using System.ComponentModel.DataAnnotations;

namespace OnlineLecture.Model.DTO
{
    public class NewSubject
    {

        [Required]
        public string SubjectName { get; set; } = string.Empty;
        [Required]
        public string SubjectDescription { get; set; } = string.Empty;
    }
}
