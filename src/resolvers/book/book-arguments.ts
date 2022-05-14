import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";
import { MaxLength, MinLength, IsEmail } from "class-validator";
import {Review} from "../../entities/review-entity";
import {ReviewInput} from "../review/review-arguments";


@InputType()
export class BaseBookInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  author: string;

  @Field()
  rating: number;

  @Field()
  genre: string;

  @Field()
  image: string;
}

@InputType()
export class BookInput extends BaseBookInput {
  @Field()
  _id: ObjectId;
}

@InputType()
export class EditBookInput {

  @Field({nullable: true})
  @MaxLength(30)
  title?: string;

  @Field({nullable: true})
  @MaxLength(300)
  description?: string;

  @Field({nullable: true})
  @MaxLength(30)
  author?: string;

  @Field({nullable: true})
  @MinLength(1)
  rating?: string;

  @Field(type => [ReviewInput])
  reviews?: Review[];
}