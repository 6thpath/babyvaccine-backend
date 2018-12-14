"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ChildrenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    isEnabled: {
        type: Boolean,
        default: true
    }
});
//# sourceMappingURL=children.schema.js.map