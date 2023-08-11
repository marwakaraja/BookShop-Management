using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineLecture.Interfaces;
using OnlineLecture.Repository;

namespace OnlineLecture.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly ISubjectRepository subjectRepository;

        public ValuesController(ISubjectRepository subjectRepository)
        {
            this.subjectRepository = subjectRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllLectures()
        {
            
            return Ok(await subjectRepository.GetLectures());
        }
    }
}
