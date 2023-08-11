using Microsoft.EntityFrameworkCore;
using OnlineLecture.Data;
using OnlineLecture.Interfaces;
using OnlineLecture.Model;
using OnlineLecture.Model.DTO;

namespace OnlineLecture.Repository
{
    public class SubjectRepository : ISubjectRepository
    {
        private readonly MyAppContext context;

        public SubjectRepository( MyAppContext context)
        {
            this.context = context;
        }

        public bool DeleteLecture(int ID)
        {
            bool result = false;
            var lecture = context.Lectures.Find(ID);
            if (lecture != null)
            {
                context.Entry(lecture).State = EntityState.Deleted;
                context.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }

        public bool DeleteSubject(int ID)
        {
            bool result = false;
            var subject = context.Subjects.Find(ID);
            if (subject != null)
            {
                context.Entry(subject).State = EntityState.Deleted;
                context.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }

        public async Task<IList<Lecture>> GetLecture(int subjectid)
        {
            return await context.Lectures.Where(l=>l.Subjectid== subjectid).ToListAsync();
        }

        public async Task<IList<Lecture>> GetLectures()
        {
            return await context.Lectures.ToListAsync();
        }

        public Lecture GetLectureID(int subjectid,int ID)
        {
            return context.Lectures.FirstOrDefault(l => l.LectureId == ID && l.Subjectid== subjectid);

        }

        public async Task<IList<Subject>> GetSubject()
        {
            return await context.Subjects.ToListAsync();
        }

        public Subject GetSubjectID(int ID)
        {
            return context.Subjects.FirstOrDefault(s => s.SubjectId==ID);
        }

        public Lecture InsertLecture(Lecture objLecture)
        {
            context.Lectures.Add(objLecture);
            context.SaveChanges();
            return objLecture;
        }

        public Subject InsertSubject(Subject objSubject)
        {
            context.Subjects.Add(objSubject);
            context.SaveChanges();
            return objSubject;
        }

        public Lecture UpdateLecture(Lecture objLecture)
        {
            context.Lectures.Update(objLecture);
            context.SaveChanges();
            return objLecture;
        }

        public Subject UpdateSubject(Subject objSubject)
        {
            context.Subjects.Update(objSubject);
            context.SaveChanges();
            return objSubject;
        }
    }
}
