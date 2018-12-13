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
const vaccin_service_1 = require("./vaccin.service");
const vaccin_dto_1 = require("./dto/vaccin.dto");
let VaccinController = class VaccinController {
    constructor(vaccinService) {
        this.vaccinService = vaccinService;
    }
    list() {
        return this.vaccinService.vaccins();
    }
    create(data) {
        return this.vaccinService.create(data);
    }
    update(data) {
        return this.vaccinService.update(data);
    }
    delete(data) {
        return this.vaccinService.delete(data);
    }
};
__decorate([
    common_1.Get('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], VaccinController.prototype, "list", null);
__decorate([
    common_1.Get('create'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vaccin_dto_1.Create]),
    __metadata("design:returntype", Object)
], VaccinController.prototype, "create", null);
__decorate([
    common_1.Get('update'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vaccin_dto_1.Update]),
    __metadata("design:returntype", Object)
], VaccinController.prototype, "update", null);
__decorate([
    common_1.Get('delete'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vaccin_dto_1.Delete]),
    __metadata("design:returntype", Object)
], VaccinController.prototype, "delete", null);
VaccinController = __decorate([
    common_1.Controller('vaccin'),
    __metadata("design:paramtypes", [vaccin_service_1.VaccinService])
], VaccinController);
exports.VaccinController = VaccinController;
//# sourceMappingURL=vaccin.controller.js.map