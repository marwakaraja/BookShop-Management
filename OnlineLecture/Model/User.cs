using System.ComponentModel.DataAnnotations;

namespace OnlineLecture.Model
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [Required]  
        public string UserName { get; set; }  = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
        [Required]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Phone { get; set; } = string.Empty;

        public List<Subject> subjects= new List<Subject>();
        public List<Post> posts= new List<Post>();

        
    }
}
