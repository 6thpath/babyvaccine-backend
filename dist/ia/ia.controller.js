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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const ia_service_1 = require("./ia.service");
const ia_dto_1 = require("./dto/ia.dto");
let IaController = class IaController {
    constructor(iaService) {
        this.iaService = iaService;
    }
    list() {
        return this.iaService.ias();
    }
    create(data) {
        return this.iaService.create(data);
    }
    update(data) {
        return this.iaService.update(data);
    }
    delete(data) {
        return this.iaService.delete(data);
    }
};
__decorate([
    common_1.Get('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], IaController.prototype, "list", null);
__decorate([
    common_1.Get('create'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ia_dto_1.Create]),
    __metadata("design:returntype", Object)
], IaController.prototype, "create", null);
__decorate([
    common_1.Get('update'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ia_dto_1.Update]),
    __metadata("design:returntype", Object)
], IaController.prototype, "update", null);
__decorate([
    common_1.Get('delete'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ia_dto_1.Delete]),
    __metadata("design:returntype", Object)
], IaController.prototype, "delete", null);
IaController = __decorate([
    common_1.Controller('ia'),
    __metadata("design:paramtypes", [ia_service_1.IaService])
], IaController);
exports.IaController = IaController;
//# sourceMappingURL=ia.controller.js.map