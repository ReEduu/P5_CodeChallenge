const StudentController = require("./../../lib/controllers/StudentController");

describe("Unit test for Student Controller Class",()=>{
    test("Return the list of emails",()=>{
        emails = StudentController.getStudentEmails();
        expect(emails[0]).toBe("Todd@visualpartnership.xyz");
        expect(emails[1]).toBe("Sexton@visualpartnership.xyz");
    })

    test("Return the list of user with credits > 500",()=>{
        creditStudents = StudentController.getValidCreditStudents();
        expect(creditStudents.length).toBe(27);
    })
});
