import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Review, ReviewModel } from "../../entities/review-entity";
import {BaseReviewInput , ReviewInput, EditReviewInput} from "../review/review-arguments";


@Resolver()
export class ReviewResolver {

  @Query(returns => [Review])
  async reviews():Promise<Review[]> {
    return await ReviewModel.find({})
  }

  @Query(returns => Review)
  async review(@Arg("_id") _id: string):Promise<Review> {
    return await ReviewModel.findById(_id);
  }


  @Mutation(returns => Review)
  async createReview(@Arg("data") data: BaseReviewInput):Promise<Review> {
    const newUser = new ReviewModel(data);
    await newUser.save();
    return newUser
  }

  
  @Mutation(returns => Review)
  async deleteReview(@Arg("_id") _id: string):Promise<Review> {
    return await ReviewModel.findByIdAndRemove(_id);
  }


  @Mutation(returns => Review)
  async searchBy(@Arg("_id") _id: string):Promise<Review> {
    return await ReviewModel.findById(_id);
  } 
 
 

  @Mutation(returns => Review)
  async editReview(@Arg("_id") _id: string, @Arg("data") data: EditReviewInput):Promise<Review> {
    const reviewData = data
    return await ReviewModel.findByIdAndUpdate(_id, reviewData, {new: true});
  }
  
    
 
}
