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
exports.InfoController = void 0;
const common_1 = require("@nestjs/common");
const info_service_1 = require("./info.service");
let InfoController = class InfoController {
    constructor(infoService) {
        this.infoService = infoService;
    }
    async shuffling(textdata) {
        return this.infoService.shuffling(textdata);
    }
    async oddnumber(oddnumber) {
        return this.infoService.oddnumber(oddnumber);
    }
    async countsmikey(textfile) {
        return this.infoService.countsmikey(textfile);
    }
};
exports.InfoController = InfoController;
__decorate([
    (0, common_1.Get)('/shuffling/:textdata'),
    __param(0, (0, common_1.Param)('textdata')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfoController.prototype, "shuffling", null);
__decorate([
    (0, common_1.Get)('/oddnumber'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], InfoController.prototype, "oddnumber", null);
__decorate([
    (0, common_1.Get)('/countsmikey'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], InfoController.prototype, "countsmikey", null);
exports.InfoController = InfoController = __decorate([
    (0, common_1.Controller)('info'),
    __metadata("design:paramtypes", [info_service_1.InfoService])
], InfoController);
//# sourceMappingURL=info.controller.js.map