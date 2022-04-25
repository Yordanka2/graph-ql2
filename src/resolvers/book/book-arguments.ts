import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";
import { MaxLength, MinLength, IsEmail } from "class-validator";


@InputType()
export class BaseBookInput {
  @Field()
  title: string;

  @Field()
  author: string;
  
  
  @Field()
  shortDescription: string;

  
  @Field()
  genre: string;

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
  @MaxLength(30)
  author?: string;


  @Field({nullable: true})
  @MaxLength(100)
  shortDescription?: string;


  @Field({nullable: true})
  @MaxLength(15)
  genre: string;

}