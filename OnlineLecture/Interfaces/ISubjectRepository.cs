using OnlineLecture.Model.DTO;
using OnlineLecture.Model;

namespace OnlineLecture.Interfaces
{
    public interface ISubjectRepository
    {
        Task<IList<Subject>> GetSubject();
        Subject GetSubjectID(int ID);
        Subject InsertSubject(Subject objSubject);
        Subject UpdateSubject(Subject objSubject);
        bool DeleteSubject(int ID);


        Task<IList<Lecture>> GetLecture(int subjectid);
        Task<IList<Lecture>> GetLectures();

        Lecture GetLectureID(int subjectid,int ID);
        Lecture InsertLecture(Lecture objLecture);
        Lecture UpdateLecture(Lecture objLecture);
        bool DeleteLecture(int ID);
    }
}
