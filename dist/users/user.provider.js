"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./schemas/user.schema");
exports.userProvider = [
    {
        provide: 'UserModelToken',
        useFactory: (connection) => connection.model('User', user_schema_1.UserSchema),
        inject: ['DbConnectionToken'],
    },
];
//# sourceMappingURL=user.provider.js.map