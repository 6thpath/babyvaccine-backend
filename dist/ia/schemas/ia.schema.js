"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.IaSchema = new mongoose.Schema({
    name: String,
    address: String,
    isEnabled: {
        type: Boolean,
        default: true
    }
});
//# sourceMappingURL=ia.schema.js.map