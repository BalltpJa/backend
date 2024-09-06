"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoService = void 0;
const common_1 = require("@nestjs/common");
const underscore_1 = require("underscore");
let InfoService = class InfoService {
    shuffling(textdata) {
        if (textdata.length === 1) {
            return [textdata];
        }
        let result = [];
        let setResult = new Set();
        for (let index = 0; index < textdata.length; index++) {
            const element = textdata[index];
            if (setResult.has(element))
                continue;
            setResult.add(element);
            let setSlice = textdata.slice(0, index) + textdata.slice(index + 1);
            for (let item of this.shuffling(setSlice)) {
                result.push(element + item);
            }
        }
        console.log('result : ', result);
        return result;
    }
    oddnumber(number) {
        const result = [];
        for (const item of underscore_1.default.uniq(number)) {
            const data = [];
            for (const element of number) {
                if (item === element) {
                    data.push(element);
                }
            }
            if ((data.length % 2) !== 0) {
                result.push(...(underscore_1.default.uniq(data)));
            }
        }
        console.log('result:', result);
        return result;
    }
    countsmikey(textfile) {
        const result = [];
        const smileys = [":)", ":D", ";-D", ":~)"];
        for (const item of smileys) {
            if (textfile.includes(item)) {
                result.push(item);
            }
        }
        console.log('result:', result.length);
        return result.length;
    }
};
exports.InfoService = InfoService;
exports.InfoService = InfoService = __decorate([
    (0, common_1.Injectable)()
], InfoService);
//# sourceMappingURL=info.service.js.map