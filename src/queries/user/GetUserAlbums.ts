import { gql } from '@apollo/client'
import { User } from '@/datas/types';

export const GET_USER_ALBUMS = gql`
    query UserAlbums($userId: ID!) {
        user(id: $userId) {
          albums {
            data {
              title
              photos {
                data {
                  title
                  id
                }
              }
              id
            }
          }
        }
    }
`

export interface UserAlbumsResult {
  user: User
}

export interface UserAlbumsVariables {
  userId: string
}