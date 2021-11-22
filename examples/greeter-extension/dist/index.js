"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
(0, tslib_1.__exportStar)(require("./application"), exports);
(0, tslib_1.__exportStar)(require("./component"), exports);
(0, tslib_1.__exportStar)(require("./greeting-service"), exports);
(0, tslib_1.__exportStar)(require("./animal-service"), exports);
(0, tslib_1.__exportStar)(require("./keys"), exports);
(0, tslib_1.__exportStar)(require("./types"), exports);
const application_1 = require("./application");
if (require.main === module) {
    const app = new application_1.GreetingApplication();
    app.main().catch(err => {
        console.error(err);
        process.exit(1);
    });
}
//# sourceMappingURL=index.js.map