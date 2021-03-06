import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Book, BookModel } from "../../entities/book-entity";
import {BaseBookInput , BookInput, EditBookInput} from "../book/book-arguments";
import {UserRoles} from "../user/user-roles";


@Resolver()
export class BookResolver {

  @Query(returns => [Book])
  async books():Promise<Book[]> {
    return await BookModel.find({})
  }

  @Query(returns => Book)
  async book(@Arg("_id") _id: string):Promise<Book> {
    return await BookModel.findById(_id);
  }
  // @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation(returns => Book)
  async createBook(@Arg("data") data: BaseBookInput):Promise<Book> {
    const newUser = new BookModel(data);
    await newUser.save();
    return newUser
  }

  // @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation(returns => Book)
  async deleteBook(@Arg("_id") _id: string):Promise<Book> {
    return await BookModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Book)
  async searchBy(@Arg("_id") _id: string):Promise<Book> {
    return await BookModel.findById(_id);
  }
  @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation(returns => Book)
  async editBook(@Arg("_id") _id: string, @Arg("data") data: EditBookInput):Promise<Book> {
    const bookData = data
    return await BookModel.findByIdAndUpdate(_id, bookData, {new: true});
  }
 
}
