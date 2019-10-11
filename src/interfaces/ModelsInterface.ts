import { UserModel } from "../models/UserModel";
import { PostModel } from "../models/PostModel";
import { CommentModel } from "../models/CommentModel";

export interface ModelsInterface {
    Post: PostModel;
    User: UserModel
    Comment: CommentModel;
}