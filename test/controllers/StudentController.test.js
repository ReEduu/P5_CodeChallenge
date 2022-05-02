const StudentController = require("./../../lib/controllers/StudentController");

describe("Unit test ExplorarController Class",()=>{
    test("evaluate getExplorersAmountByMission method",()=>{
        const nodeAmount = ExplorerController.getExplorersAmountByMission("node");
        expect(nodeAmount).toBe(10);
    });
    test("evaluate filterByMission method",()=>{
        const nodeExplorers = ExplorerController.getExplorersByMission("node");
        expect(nodeExplorers[0].name).toBe("Woopa1");
    });
    test("evaluate getExplorersUsernamesByMission method",()=>{
        const nodeUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(nodeUsernames[0]).toBe("ajolonauta1");
    });
    test("evaluate applyValidationNumber method",()=>{
        const fizz = ExplorerController.getValidationInNumber(1);
        expect(fizz.toBe(1));
    });
});
