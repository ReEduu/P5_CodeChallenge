const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Unit test for User Reader",()=>{
    test("Return the list of explorers antes test the first explorer",()=>{
        const explorers = Reader.readJsonFile("explorers.json");
        const nodeExplorers = ExplorerService.filterByMission(explorers, "node");
        const nodeAmount = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        const nodeUsernames=ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(nodeExplorers[0].name).toBe("Woopa1");
        expect(nodeAmount).toBe(10);
        expect(nodeUsernames[0]).toBe("ajolonauta1");
    });
});
