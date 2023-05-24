import { Maybe, User } from '@/datas/types'
import { gql } from '@apollo/client'

export const GET_USER_BY_ID = gql`
    query User($userId: ID!) {
        user(id: $userId) {
            website
            username
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
            name
            id
            phone
            company {
                name
            }
            albums {
                data {
                    id
                    title
                }
            }
        }
    }
`

export interface UserByIdResult {
    user: Maybe<User>
}

export interface UserByIdVariables {
    userId: string
}