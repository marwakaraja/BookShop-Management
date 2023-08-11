using System.ComponentModel.DataAnnotations;

namespace OnlineLecture.Model
{
    public class Post
    {
        [Key]
        public int  PostId { get; set; }
        [Required]
        public string PostTitle { get; set; } = string.Empty;
        [Required]
        public string PostBody { get; set; } = string.Empty;
        public DateTime DOP { get; set; } = DateTime.UtcNow;

        public int userid { get; set; }


    }
}
