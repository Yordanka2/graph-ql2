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
exports.ReviewModel = exports.Review = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const mongodb_1 = require("mongodb");
let Review = class Review {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], Review.prototype, "_id", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Review.prototype, "bookAuthor", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Review.prototype, "bookTitle", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Review.prototype, "opinion", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Review.prototype, "rating", void 0);
Review = __decorate([
    (0, type_graphql_1.ObjectType)()
], Review);
exports.Review = Review;
exports.ReviewModel = (0, typegoose_1.getModelForClass)(Review, { schemaOptions: { timestamps: true } });
