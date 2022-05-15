import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user/user-resolver";
import { AuthResolver } from "./resolvers/auth/auth-resolver";
import { BookResolver}  from "./resolvers/book/book-resolver";
import { ReviewResolver}  from "./resolvers/review/review-resolver";
import { TypegooseMiddleware } from "./typegoose-middleware";
import {ObjectId} from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import * as path from "path"
import {authChecker} from "./resolvers/auth/auth-checker";

export const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
            AuthResolver,
            BookResolver,
            ReviewResolver,

        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        // use document converting middleware
        globalMiddlewares: [TypegooseMiddleware],
        // use ObjectId scalar mapping
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
        authChecker,
      });
    return schema
}