import { Album } from "@/datas/types";
import { gql } from "@apollo/client";

export const GET_ALBUM_BY_ID = gql`
    query Album($albumId: ID!) {
        album(id: $albumId) {
            id
            title
            photos {
                data {
                    title
                    url
                    id
                }
            }
            user {
                username
                id
            }
        }
    }
`

export interface PhotoByIdVariables {
    albumId: string
}

export interface PhotoByIdResult {
    album: Album
}