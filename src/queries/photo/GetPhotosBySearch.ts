import { PhotosPage } from '@/datas/types'
import { gql } from '@apollo/client'

export const GET_PHOTOS_BY_SEARCH = gql`
    query GetPhotosBySearch($options: PageQueryOptions) {
        photos(options: $options) {
            data {
                id
                url
                title
                album {
                    user {
                        username
                        id
                    }
                }
            }
        }
    }
`

export interface PhotosBySearchResult {
    photos: PhotosPage
}

export interface PhotosBySearchVariables {
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