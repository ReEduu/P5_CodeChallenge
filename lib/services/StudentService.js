class StudentService{
    static getStudents(students){
        return students;
    }
    static getEmails(students){
        const studentsWithCertification = students.filter((student) => student.haveCertification === true);
        return studentsWithCertification.email;
    }
}
module.exports = ExplorerService;