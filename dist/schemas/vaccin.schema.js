"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.VaccinSchema = new mongoose.Schema({
    name: String,
    description: String,
    availableAge: Array
});
//# sourceMappingURL=vaccin.schema.js.map