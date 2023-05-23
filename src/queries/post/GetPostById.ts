import { Post } from "@/datas/types";
import { gql } from "@apollo/client";

export const GET_POST_BY_ID = gql`
    query Post($postId: ID!) {
        post(id: $postId) {
            body
            id
            title
            user {
                username
                id
            }
            comments {
                data {
                    id
                    body
                }
            }
        }
    }
`

export interface PostByIdVariables {
    postId: string
}

export interface PostByIdResult {
    post: Post
}