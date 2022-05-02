class StudentService{
    
    static getEmails(students){
        const studentsWithCertification = students.filter((student) => student.haveCertification === true);
        const emails = studentsWithCertification.map((student) => student.email);
        return emails;
    }
}
module.exports = StudentService;