import { PhotosPage, PostsPage } from "@/datas/types";
import { gql } from "@apollo/client";

export const GET_POSTS_AND_PHOTOS = gql`
    query GetPostsAndPhotos($postsOptions: PageQueryOptions, $photosOptions: PageQueryOptions) {
        posts(options: $postsOptions) {
            data {
                title
                body
                comments {
                    data {
                        id
                    }
                }
                user {
                    username
                }
            }
        }
        photos(options: $photosOptions) {
            data {
                title
                thumbnailUrl
                album {
                    user {
                        username
                    }
                }
            }
        }
    }
`

export interface MainVariables {
    postsOptions: {
        paginate: {
            limit: number,
            page: number
        }
    },
    photosOptions: {
        paginate: {
            limit: number,
            page: number
        }
    }
}


export interface GetPostsAndPhotos {
    posts:PostsPage,
    photos:PhotosPage,
}