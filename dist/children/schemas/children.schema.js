"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ChildrenSchema = new mongoose.Schema({
    name: String,
    dob: String,
    userId: String,
    isEnabled: {
        type: Boolean,
        default: true
    }
});
//# sourceMappingURL=children.schema.js.map