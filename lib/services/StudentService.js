class StudentService{

    static getEmails(students){
        const studentsWithCertification = students.filter((student) => student.haveCertification === true);
        const emails = studentsWithCertification.map((student) => student.email);
        return emails;
    }

    static getCreditStudents(students){
        const creditStudents = students.filter((student) => student.credits > 500);
        return creditStudents;
    }
}
module.exports = StudentService;