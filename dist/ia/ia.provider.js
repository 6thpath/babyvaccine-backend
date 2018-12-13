"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ia_schema_1 = require("./schemas/ia.schema");
exports.iaProvider = [
    {
        provide: 'IaModelToken',
        useFactory: (connection) => connection.model('Ia', ia_schema_1.IaSchema),
        inject: ['DbConnectionToken']
    }
];
//# sourceMappingURL=ia.provider.js.map