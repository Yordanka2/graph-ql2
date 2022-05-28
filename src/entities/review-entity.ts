import { ObjectType, InputType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"

@ObjectType()
export class Review {

  @Field()
  readonly _id: ObjectId;

  @Prop({required: true})
  @Field()
  bookAuthor: string;

  @Prop({required: true})
  @Field()
  bookTitle: string;

  @Prop({required: true})
  @Field()
  opinion: string;


  @Prop({required: true})
  @Field()
  rating: number;
  
  @Prop({required: true})
  @Field()
  craeteBy: string;
}

export const ReviewModel = getModelForClass(Review, { schemaOptions: { timestamps: true }})