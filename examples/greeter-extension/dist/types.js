"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.asAnimal = exports.asGreeter = exports.ANIMAL_EXTENSION_POINT_NAME = exports.GREETER_EXTENSION_POINT_NAME = void 0;
const core_1 = require("@loopback/core");
/**
 * Name/id of the greeter extension point
 */
exports.GREETER_EXTENSION_POINT_NAME = 'greeters';
/**
 * Name/id of the animal extension point
 */
exports.ANIMAL_EXTENSION_POINT_NAME = 'animals';
/**
 * A binding template for greeter extensions
 */
const asGreeter = binding => {
    (0, core_1.extensionFor)(exports.GREETER_EXTENSION_POINT_NAME)(binding);
    binding.tag({ namespace: 'greeters' });
};
exports.asGreeter = asGreeter;
/**
 * A binding template for animal extension
 */
const asAnimal = binding => {
    (0, core_1.extensionFor)(exports.ANIMAL_EXTENSION_POINT_NAME)(binding);
    binding.tag({ namespace: 'animals' });
};
exports.asAnimal = asAnimal;
//# sourceMappingURL=types.js.map