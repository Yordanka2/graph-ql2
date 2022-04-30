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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditBookInput = exports.BookInput = exports.BaseBookInput = void 0;
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
const class_validator_1 = require("class-validator");
let BaseBookInput = class BaseBookInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseBookInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseBookInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseBookInput.prototype, "author", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseBookInput.prototype, "rating", void 0);
BaseBookInput = __decorate([
    (0, type_graphql_1.InputType)()
], BaseBookInput);
exports.BaseBookInput = BaseBookInput;
let BookInput = class BookInput extends BaseBookInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], BookInput.prototype, "_id", void 0);
BookInput = __decorate([
    (0, type_graphql_1.InputType)()
], BookInput);
exports.BookInput = BookInput;
let EditBookInput = class EditBookInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], EditBookInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], EditBookInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], EditBookInput.prototype, "author", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], EditBookInput.prototype, "rating", void 0);
EditBookInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditBookInput);
exports.EditBookInput = EditBookInput;