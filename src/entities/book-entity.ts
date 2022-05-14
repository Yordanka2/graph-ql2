 
import { ObjectType, InputType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"
import {Review} from "./review-entity";

@ObjectType()
export class Book {

  @Field()
  readonly _id: ObjectId;

  @Prop({required: true})
  @Field()
  title: string;

  @Prop({required: true})
  @Field()
  description: string;

  @Prop({required: true})
  @Field()
  author: string;

  @Prop({required: true})
  @Field()
  rating: number;

  @Prop({required: true})
  @Field()
  image: string;

  @Field(type => [Review])
  @Prop({default: []})
  reviews?: Review[]
}

export const BookModel = getModelForClass(Book, { schemaOptions: { timestamps: true }})