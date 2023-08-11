using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using OnlineLecture.Interfaces;
using OnlineLecture.Model;
using OnlineLecture.Model.DTO;
using OnlineLecture.Repository;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace OnlineLecture.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAuthRepository authRepository;
        private readonly IConfiguration configuration;

        public UsersController( IAuthRepository authRepository, IConfiguration configuration)
        {
            this.authRepository = authRepository;
            this.configuration = configuration;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok( authRepository.GetUsers());
        }


        [HttpPost("Register")]
        public IActionResult Register(NewUser UserForRegister)
        {

            var UserEmail = UserForRegister.Email;
            if(authRepository.UserExist(UserEmail))
            {
                return BadRequest("هذا المستخدم مسجل من قبل");
            }
            var userToCreate = new User
            {
                UserName = UserForRegister.UserName,
                Email = UserForRegister.Email,
                Password = UserForRegister.Password,
                Phone = UserForRegister.Phone
            };
            var theNewUser= authRepository.Register(userToCreate);
               return Ok("تم تسجيل الاشتراك");
        
        }

            [HttpPost("Login")]
        public IActionResult Login(UserForLogin userForLogin)
        {
            var userFromRepo =  authRepository.Login(userForLogin.Email, userForLogin.Password);
            if (userFromRepo == null)
            {
                return Unauthorized();
            }
            var claims = new[]
            {
                new Claim (ClaimTypes.NameIdentifier,userFromRepo.UserId.ToString()),
                new Claim (ClaimTypes.Name,userFromRepo.UserName)

            };
            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(configuration["Authentication:Secret"]));
            var signingcreditionals = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var mytoken = new JwtSecurityToken(
                configuration["Authentication:Issuer"],
                configuration["Authentication:Audience"],
                claims,
                DateTime.UtcNow,
                DateTime.UtcNow.AddHours(1),
                signingcreditionals
                );
            var serializertoken=new JwtSecurityTokenHandler().WriteToken(mytoken);
            return Ok(new { token = serializertoken });
        }
    }
}
