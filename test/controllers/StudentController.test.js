const StudentController = require("./../../lib/controllers/StudentController");

describe("Unit test for Student Controller Class",()=>{
    test("Return the list of emails",()=>{
        const emails = StudentController.getStudentEmails();
        expect(emails[0]).toBe("Todd@visualpartnership.xyz");
        expect(emails[1]).toBe("Sexton@visualpartnership.xyz");
    });

    test("Return the list of students",()=>{
        const students = StudentController.getStudents();
        expect(students[0].name).toBe("Warren");
        expect(students[0].email).toBe("Todd@visualpartnership.xyz");
        expect(students[0].credits).toBe(508);
        expect(students[0].enrollments[0]).toBe("Visual Thinking Intermedio");
        expect(students[0].previousCourses).toBe(1);
        expect(students[0].haveCertification).toBe(true);
    });

    test("Return the list of user with credits > 500",()=>{
        const creditStudents = StudentController.getValidCreditStudents();
        expect(creditStudents.length).toBe(27);
    });
});
