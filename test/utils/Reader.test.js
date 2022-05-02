const Reader = require("./../../lib/utils/Reader");

describe("Unit test for User Reader",()=>{
    test("Return the list of explorers antes test the first explorer",()=>{
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers[0].name).toBe("Woopa1");
        expect(explorers[0].githubUsername).toBe("ajolonauta1");
        expect(explorers[0].score).toBe(1);
        expect(explorers[0].mission).toBe("node");
        expect(explorers[0].stacks[0]).toBe("javascript");
    });
});