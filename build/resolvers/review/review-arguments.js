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
exports.EditReviewInput = exports.ReviewInput = exports.BaseReviewInput = void 0;
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
const class_validator_1 = require("class-validator");
let BaseReviewInput = class BaseReviewInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseReviewInput.prototype, "bookAuthor", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseReviewInput.prototype, "opinion", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseReviewInput.prototype, "bookTitle", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseReviewInput.prototype, "rating", void 0);
BaseReviewInput = __decorate([
    (0, type_graphql_1.InputType)()
], BaseReviewInput);
exports.BaseReviewInput = BaseReviewInput;
let ReviewInput = class ReviewInput extends BaseReviewInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], ReviewInput.prototype, "_id", void 0);
ReviewInput = __decorate([
    (0, type_graphql_1.InputType)()
], ReviewInput);
exports.ReviewInput = ReviewInput;
let EditReviewInput = class EditReviewInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], EditReviewInput.prototype, "bookAuthor", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], EditReviewInput.prototype, "opinion", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], EditReviewInput.prototype, "bookTitle", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], EditReviewInput.prototype, "rating", void 0);
EditReviewInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditReviewInput);
exports.EditReviewInput = EditReviewInput;
