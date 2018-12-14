"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.IaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    isEnabled: {
        type: Boolean,
        default: true
    }
});
//# sourceMappingURL=ia.schema.js.map