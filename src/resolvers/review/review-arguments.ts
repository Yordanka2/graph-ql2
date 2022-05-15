import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";
import { MaxLength, MinLength, IsEmail } from "class-validator";


@InputType()
export class BaseReviewInput {
  @Field()
  bookAuthor: string;

  @Field()
  opinion: string;

  @Field()
  bookTitle: string;

  @Field()
  rating: number;

  @Field({nullable: true})
  @MaxLength(30)
  createBy?: string;
}

@InputType()
export class ReviewInput extends BaseReviewInput {
  @Field()
  _id: ObjectId;
}

@InputType()
export class EditReviewInput {

  @Field({nullable: true})
  @MaxLength(30)
  bookAuthor?: string;

  @Field({nullable: true})
  @MaxLength(50)
  opinion?: string;

  @Field({nullable: true})
  @MaxLength(30)
  bookTitle?: string;

  @Field({nullable: true})
  @MinLength(1)
  rating?: string;

  @Field({nullable: true})
  @MaxLength(30)
  createBy?: string;
}