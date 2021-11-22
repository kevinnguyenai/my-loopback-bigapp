"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
const types_1 = require("./types");
/**
 * An ExtensionPoint for animals that can speak by dst obj
 */
let AnimalService = class AnimalService {
    constructor(getAnimals, options) {
        this.getAnimals = getAnimals;
        this.options = options;
    }
    /**
     * Finding the animals Object by gen
     * @param gen - type 'cat' or 'dog'
     */
    async findAnimal(gen) {
        const animal = await this.getAnimals();
        return animal.find(g => g.gen === gen);
    }
    /**
     * speaking of specific animal
     * @param gen - type 'cat' or 'dog'
     * @param text - name of animal
     */
    async speak(gen, text) {
        var _a;
        let speaking = '';
        const animal = await this.findAnimal(gen);
        if (animal) {
            speaking = animal.speak(text);
        }
        else {
            speaking = `Animal not found`;
        }
        if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.color) {
            speaking = chalk_1.default.keyword(this.options.color)(animal);
        }
        return speaking;
    }
};
AnimalService = (0, tslib_1.__decorate)([
    (0, core_1.extensionPoint)(types_1.ANIMAL_EXTENSION_POINT_NAME),
    (0, tslib_1.__param)(0, (0, core_1.extensions)()),
    (0, tslib_1.__param)(1, (0, core_1.config)()),
    (0, tslib_1.__metadata)("design:paramtypes", [Function, Object])
], AnimalService);
exports.AnimalService = AnimalService;
//# sourceMappingURL=animal-service.js.map