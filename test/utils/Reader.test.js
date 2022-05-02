const Reader = require("./../../lib/utils/Reader");

describe("Unit test for User Reader",()=>{
    test("Return the list of students and test the first student",()=>{
        const students = Reader.readJsonFile("visualpartners.json");
        expect(students[0].name).toBe("Warren");
        expect(students[0].email).toBe("Todd@visualpartnership.xyz");
        expect(students[0].credits).toBe(508);
        expect(students[0].enrollments[0]).toBe("Visual Thinking Intermedio");
        expect(students[0].previousCourses).toBe(1);
        expect(students[0].haveCertification).toBe(true);
    });
});