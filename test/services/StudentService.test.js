const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

describe("Unit test for User Reader",()=>{
    
    test("Return the list of emails",()=>{
        const students = Reader.readJsonFile("visualpartners.json");
        const emails = StudentService.getEmails(students);
        expect(emails[0]).toBe("Todd@visualpartnership.xyz");
        expect(emails[1]).toBe("Sexton@visualpartnership.xyz");
    });

    test("Return the list of user with credits > 500",()=>{
        const students = Reader.readJsonFile("visualpartners.json");
        const creditStudents = StudentService.getCreditStudents(students);
        expect(creditStudents.length).toBe(27);
    });
});