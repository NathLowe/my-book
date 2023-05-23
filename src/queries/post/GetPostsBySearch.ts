import { PostsPage } from '@/datas/types'
import { gql } from '@apollo/client'

export const GET_POSTS_BY_SEARCH = gql`
    query GetPostsBySearch($options: PageQueryOptions) {
        posts(options: $options) {
            data {
                id
                title
                body
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
    }
`

export interface PostsBySearchResult {
    posts: PostsPage
}

export interface PostsBySearchVariables {
    options: {
        search: {
            q: string
        },
        paginate: {
            limit: number,
            page: number
        }
    }
}