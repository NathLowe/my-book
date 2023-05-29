import { UsersPage } from '@/datas/types'
import { gql } from '@apollo/client'

export const GET_USERS = gql`
    query GetUsers($options: PageQueryOptions) {
        users(options: $options) {
            data {
                id
                username
                name
                email
            }
        }
    }
`

export interface UsersResult {
    users: UsersPage
}

export interface UsersVariables {
    options: {
        paginate: {
            limit: number,
            page: number
        }
    }
}