const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Welcome!"});
});

app.listen(port, () => {
    console.log(`API in localhost:${port}`);
});

app.get("/v1/students",(request,response)=>{
    const students = StudentController.getStudents();
    response.json(students);
});

app.get("/v1/students/emails",(request,response)=>{
    const emails = StudentController.getStudentEmails();
    response.json(emails);
});

app.get("/v1/students/credits",(request,response)=>{
    const studentsValidCredits = StudentController.getValidCreditStudents();
    response.json(studentsValidCredits);
});

