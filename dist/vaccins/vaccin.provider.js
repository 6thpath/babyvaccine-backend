"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vaccin_schema_1 = require("./schemas/vaccin.schema");
exports.vaccinProvider = [
    {
        provide: 'VaccinModelToken',
        useFactory: (connection) => connection.model('Vaccin', vaccin_schema_1.VaccinSchema),
        inject: ['DbConnectionToken']
    }
];
//# sourceMappingURL=vaccin.provider.js.map