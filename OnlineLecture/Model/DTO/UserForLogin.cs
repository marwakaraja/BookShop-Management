using System.ComponentModel.DataAnnotations;

namespace OnlineLecture.Model.DTO
{
    public class UserForLogin
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
