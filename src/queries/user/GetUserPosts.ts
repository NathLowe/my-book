import { gql } from '@apollo/client'
import { User } from '@/datas/types';

export const GET_USER_POSTS = gql`
    query User($userId: ID!) {
        user(id: $userId) {
            posts {
                data {
                    body
                    id
                    title
                    comments {
                        data {
                            id
                        }
                    }
                }
            }
        }
    }
`

export interface UserPostsResult {
    user: User
}

export interface UserPostsVariables {
    userId: string
}