const Reader = require("../utils/Reader");
const ExplorerService = require("./../../lib/services/StudentService");
const FizzBuzzService = require("./../../lib/services/FizzBuzzService");
class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static getValidationInNumber(score){
        return FizzBuzzService.applyValidationInNumber(score);
    }
}
module.exports = ExplorerController;