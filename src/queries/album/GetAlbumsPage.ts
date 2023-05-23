import { AlbumsPage } from "@/datas/types";
import { gql } from "@apollo/client";

export const GET_ALBUMSPAGE = gql`
query Albums($options: PageQueryOptions, $photosOptions2: PageQueryOptions) {
    albums(options: $options) {
      data {
        title
        user {
          username
          id
        }
        photos(options: $photosOptions2) {
          data {
            title
            id
          }
        }
        id
      }
    }
}
`

export interface AlbumspageVariables {
    options: {
        paginate: {
            limit: number,
            page: number
        }
    }
}

export interface AlbumspageResult {
    albums: AlbumsPage
}