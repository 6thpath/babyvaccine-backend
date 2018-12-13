"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let ChildrenService = class ChildrenService {
    constructor(childrenModel) {
        this.childrenModel = childrenModel;
    }
    children() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.childrenModel.find({ isEnabled: true });
            }
            catch (_a) {
                return { code: 404, message: 'An error occurred!' };
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newChildren = new this.childrenModel(data);
            try {
                yield newChildren.save();
                return { code: 200, message: 'Children created' };
            }
            catch (_a) {
                return { code: 404, message: 'An error occurred!' };
            }
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.childrenModel.updateOne({ _id: data.id }, data);
                return { code: 200, message: 'Children updated' };
            }
            catch (_a) {
                return { code: 404, message: 'An error occurred!' };
            }
        });
    }
    delete(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.childrenModel.updateOne({ _id: data.id }, { isEnabled: false });
                return { code: 200, message: 'Children deleted' };
            }
            catch (_a) {
                return { code: 404, message: 'An error occurred!' };
            }
        });
    }
};
ChildrenService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('ChildrenModelToken')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], ChildrenService);
exports.ChildrenService = ChildrenService;
//# sourceMappingURL=children.service.js.map