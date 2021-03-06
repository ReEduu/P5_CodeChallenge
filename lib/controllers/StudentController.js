const Reader = require("../utils/Reader");
const StudentService = require("./../../lib/services/StudentService");
class StudentController{

    static getStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return students;
    }
    static getStudentEmails(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getEmails(students);
    }
    static getValidCreditStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getCreditStudents(students);
    }
}
module.exports = StudentController;