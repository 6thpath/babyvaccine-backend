"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.InjectrSchema = new mongoose.Schema({
    childrenId: {
        type: String,
        required: true
    },
    vaccinId: {
        type: String,
        required: true
    },
    injectAt: {
        type: String,
        required: true
    },
    isEnabled: {
        type: Boolean,
        default: true
    }
});
//# sourceMappingURL=injectr.schema.js.map