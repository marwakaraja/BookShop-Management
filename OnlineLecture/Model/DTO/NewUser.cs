using System.ComponentModel.DataAnnotations;

namespace OnlineLecture.Model.DTO
{
    public class NewUser
    {
      
        [Required]
        public string UserName { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Phone { get; set; } = string.Empty;

    }
}
