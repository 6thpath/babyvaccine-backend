"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.VaccinSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    availableAge: {
        type: Number,
        required: true
    },
    isEnabled: {
        type: Boolean,
        default: true
    }
});
//# sourceMappingURL=vaccin.schema.js.map