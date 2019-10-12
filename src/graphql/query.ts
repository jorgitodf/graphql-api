import { commentTypes } from './resources/comment/comment.schema';
import { postQueries } from './resources/post/post.schema';
import { userQueries } from './resources/user/user.schema';


const Query = `
    type Query {
        ${commentTypes}
        ${postQueries}
        ${userQueries}
    }
`;

export {
    Query
}