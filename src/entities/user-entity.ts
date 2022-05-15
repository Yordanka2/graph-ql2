import { ObjectType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"
import {UserRoles} from "../resolvers/user/user-roles";


@ObjectType()
export class User {

  @Field()
  _id: ObjectId;

  @Prop({required: true})
  @Field()
  firstName: string;

  @Prop({required: true})
  @Field()
  lastName: string;

  @Prop({required: true})
  @Field()
  email: string;

  @Prop({required: true})
  @Field()
  password: string;

  @Field()
  @Prop({default: Date.now()})
  lastLogin?: number;

  @Field(type => [String])
  @Prop({default: [UserRoles.USER]})
  roles?: string[]
}

export const UserModel = getModelForClass(User) 