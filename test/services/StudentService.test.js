const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

describe("Unit test for User Reader",()=>{
    
    test("Return the list of emails",()=>{
        const students = Reader.readJsonFile("visualpartners.json");
        emails = StudentService.getEmails(students);
        expect(emails[0]).toBe("Todd@visualpartnership.xyz");
        expect(emails[1]).toBe("Sexton@visualpartnership.xyz");
    })
});