using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineLecture.Interfaces;
using OnlineLecture.Model.DTO;
using OnlineLecture.Model;
using Microsoft.AspNetCore.Authorization;

namespace OnlineLecture.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectsController : ControllerBase
    {
        private readonly ISubjectRepository subjectRepository;

        public SubjectsController(ISubjectRepository subjectRepository)
        {
            this.subjectRepository = subjectRepository;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await subjectRepository.GetSubject());
        }

        [HttpGet("{Id}")]
        public IActionResult GetSubjectById(int Id)
        {
            return Ok(subjectRepository.GetSubjectID(Id));
        }

        [HttpPost]
        public IActionResult Post(NewSubject newsubject)
        {
            var Newsub = new Subject
            {
                SubjectName = newsubject.SubjectName,
                SubjectDescription = newsubject.SubjectDescription

            };
            var result = subjectRepository.InsertSubject(Newsub);
            if (result != null)

                return Ok("Added Successfully");

            return BadRequest(result);
        }

        [HttpPut("{subjectid}")]

        public IActionResult Put(int subjectid, NewSubject subject)
        {
            var currentsubject = subjectRepository.GetSubjectID(subjectid);
            if (currentsubject == null) return NotFound();
            currentsubject.SubjectName = subject.SubjectName;
            currentsubject.SubjectDescription = subject.SubjectDescription;
            var result = subjectRepository.UpdateSubject(currentsubject);

            return Ok("Updated Successfully");


        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var result = subjectRepository.DeleteSubject(id);
            if (result)
                return Ok("Deleted Successfully");

            return BadRequest("not deleted");
        }
    }
}
