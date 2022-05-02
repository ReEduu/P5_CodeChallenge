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
    const students = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission",(request,response)=>{
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/username/:mission",(request,response)=>{
    const mission = request.params.mission;
    const explorersUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, usernames: explorersUsernamesInMission});
});

app.get("/v1/fizzbuzz/:score",(request,response)=>{
    const score = request.params.score;
    const fizzbuzz = ExplorerController.getValidationInNumber(score);
    response.json({score: request.params.score, trick: fizzbuzz});
});