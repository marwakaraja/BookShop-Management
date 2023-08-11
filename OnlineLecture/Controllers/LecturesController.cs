using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineLecture.Interfaces;
using OnlineLecture.Model.DTO;
using OnlineLecture.Model;

namespace OnlineLecture.Controllers
{
    [Route("api/subjects/{subjectId}/lectures")]
    [ApiController]
    public class LecturesController : ControllerBase
    {

            private readonly ISubjectRepository subjectRepository;

            public IFileRepository FileRepository { get; }

            public LecturesController(ISubjectRepository subjectRepository, IFileRepository fileRepository)
            {
                this.subjectRepository = subjectRepository;
                FileRepository = fileRepository;
            }




        [HttpGet]
            public async Task<IActionResult> Get(int subjectId)
            {
                var subject = subjectRepository.GetSubjectID(subjectId);
                if (subject == null) { return NotFound("subject not found !"); }
                return Ok(await subjectRepository.GetLecture(subjectId));
            }

            [HttpGet("{Id}")]
            public IActionResult GetLecturetById(int subjectId, int Id)
            {
                return Ok(subjectRepository.GetLectureID(subjectId, Id));
            }

            [HttpPost]
            public IActionResult Post(int subjectId,[FromForm] NewLecture newLecture)
            {

                var filename = FileRepository.SaveFile(newLecture.LectureFile);
                
                var Newlec = new Lecture
                {
                    LectureName = newLecture.LectureName,
                    LectureFileName=filename,
                    Subjectid = subjectId

                };
                var result = subjectRepository.InsertLecture(Newlec);
                if (result != null)

                    return Ok("Added Successfully");

                return BadRequest(result);
            }

            [HttpPut("{lecturetid}")]

            public IActionResult Put(int subjectId, int lecturetid, NewLecture lecture)
            {
                var currentlecture = subjectRepository.GetLectureID(subjectId, lecturetid);
                if (currentlecture == null) return NotFound();
                currentlecture.LectureName = lecture.LectureName;
                currentlecture.Subjectid = subjectId;
                var result = subjectRepository.UpdateLecture(currentlecture);

                return Ok("Updated Successfully");


            }
            [HttpDelete("{id}")]
            public IActionResult Delete(int subjectId, int id)
            {

                //var subject = subjectRepository.GetSubjectID(subjectId);
                //if (subject == null) { return NotFound("subject not found !"); }
                var lecture = subjectRepository.GetLectureID(subjectId, id);
              if (lecture == null) { return NotFound("lecture not found !"); }
                var filename = lecture.LectureFileName;
                FileRepository.DeleteFile(filename);
                var result = subjectRepository.DeleteLecture( id);
                if (result)
                    return Ok("Deleted Successfully");

                return BadRequest("not deleted");
            }
        }
    }
