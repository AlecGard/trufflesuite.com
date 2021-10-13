"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forDb = exports.resources = exports.attach = exports.schema = exports.generateId = exports.serve = exports.connect = void 0;
const logger_1 = require("./logger");
const debug = logger_1.logger("db:system");
const Meta = __importStar(require("./meta/index"));
const resources_1 = require("./resources/index");
const system = Meta.forDefinitions(resources_1.definitions);
exports.connect = system.connect;
exports.serve = system.serve;
exports.generateId = system.generateId;
exports.schema = system.schema, exports.attach = system.attach, exports.resources = system.resources, exports.forDb = system.forDb;
//# sourceMappingURL=system.js.map