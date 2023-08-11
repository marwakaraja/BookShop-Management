using System.ComponentModel.DataAnnotations;

namespace OnlineLecture.Model.DTO
{
    public class NewPost
    {
       
        [Required]
        public string PostTitle { get; set; }
        [Required]
        public string PostBody { get; set; }
        
       

    }
}
