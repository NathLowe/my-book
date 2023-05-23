import { Photo } from "@/datas/types";
import { gql } from "@apollo/client";

export const GET_PHOTO_BY_ID = gql`
query Photo($photoId: ID!) {
    photo(id: $photoId) {
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
`

export interface PhotoByIdVariables {
    photoId: string
}

export interface PhotoByIdResult {
    photo: Photo
}