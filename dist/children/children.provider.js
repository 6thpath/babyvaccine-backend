"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const children_schema_1 = require("./schemas/children.schema");
exports.childrenProvider = [
    {
        provide: 'ChildrenModelToken',
        useFactory: (connection) => connection.model('Children', children_schema_1.ChildrenSchema),
        inject: ['DbConnectionToken']
    }
];
//# sourceMappingURL=children.provider.js.map