"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const example_greeter_extension_1 = require("@my-loopback-bigapp/example-greeter-extension");
const rest_1 = require("@loopback/rest");
let AnimalController = class AnimalController {
    constructor(animalService, request) {
        this.animalService = animalService;
        this.request = request;
    }
    async animal(gen, text) {
        const animal = await this.animalService.speak(gen, text);
        return {
            timestamp: new Date(),
            gen,
            animal,
        };
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/animal/{gen}/{text}', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                timestamp: 'string',
                                gen: 'string',
                                text: 'string',
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('gen')),
    (0, tslib_1.__param)(1, rest_1.param.path.string('text')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AnimalController.prototype, "animal", null);
AnimalController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)(example_greeter_extension_1.ANIMAL_SERVICE)),
    (0, tslib_1.__param)(1, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    (0, tslib_1.__metadata)("design:paramtypes", [example_greeter_extension_1.AnimalService, Object])
], AnimalController);
exports.AnimalController = AnimalController;
//# sourceMappingURL=animal.controller.js.map