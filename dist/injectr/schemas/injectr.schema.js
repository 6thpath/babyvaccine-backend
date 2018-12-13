"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.InjectrSchema = new mongoose.Schema({
    childrenId: String,
    vaccinId: String,
    injectAt: String,
    isEnabled: {
        type: Boolean,
        default: true
    }
});
//# sourceMappingURL=injectr.schema.js.map