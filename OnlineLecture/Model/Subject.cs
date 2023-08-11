using System.ComponentModel.DataAnnotations;

namespace OnlineLecture.Model
{
    public class Subject
    {

        [Key]
        public int SubjectId { get; set; }
        [Required]  
        public string SubjectName { get; set; }=string.Empty;
        [Required]
        public string SubjectDescription { get; set; }  = string.Empty;
        public List<Lecture>  Lectures { get; set; }=new List<Lecture>();   
        int userid { get; set; }    


    }
}
