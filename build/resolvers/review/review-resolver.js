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
exports.ReviewResolver = void 0;
const type_graphql_1 = require("type-graphql");
const review_entity_1 = require("../../entities/review-entity");
const review_arguments_1 = require("../review/review-arguments");
let ReviewResolver = class ReviewResolver {
    async reviews() {
        return await review_entity_1.ReviewModel.find({});
    }
    async review(_id) {
        return await review_entity_1.ReviewModel.findById(_id);
    }
    async createReview(data) {
        const newUser = new review_entity_1.ReviewModel(data);
        await newUser.save();
        return newUser;
    }
    async deleteReview(_id) {
        return await review_entity_1.ReviewModel.findByIdAndRemove(_id);
    }
    async editReview(_id, data) {
        const reviewData = data;
        return await review_entity_1.ReviewModel.findByIdAndUpdate(_id, reviewData, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [review_entity_1.Review]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReviewResolver.prototype, "reviews", null);
__decorate([
    (0, type_graphql_1.Query)(returns => review_entity_1.Review),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReviewResolver.prototype, "review", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => review_entity_1.Review),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_arguments_1.BaseReviewInput]),
    __metadata("design:returntype", Promise)
], ReviewResolver.prototype, "createReview", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => review_entity_1.Review),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReviewResolver.prototype, "deleteReview", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => review_entity_1.Review),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, review_arguments_1.EditReviewInput]),
    __metadata("design:returntype", Promise)
], ReviewResolver.prototype, "editReview", null);
ReviewResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ReviewResolver);
exports.ReviewResolver = ReviewResolver;
