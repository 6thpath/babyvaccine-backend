"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectr_schema_1 = require("./schemas/injectr.schema");
exports.injectrProvider = [
    {
        provide: 'InjectrModelToken',
        useFactory: (connection) => connection.model('Injectr', injectr_schema_1.InjectrSchema),
        inject: ['DbConnectionToken']
    }
];
//# sourceMappingURL=injectr.provider.js.map