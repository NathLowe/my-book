import React from 'react'
import { headerFont } from "@/datas/fonts"
import { randomArray, randomizeArray } from '@/datas/functions'
import UserSuggested from '@/components/UserSuggested'

import { getClient } from '@/datas/apollo'
import { GET_USERS, UsersResult, UsersVariables } from '@/queries/user/GetUsers'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'


const fetchData = async () => {
  let client = getClient()
  let { data } = await client.query<UsersResult,UsersVariables>({
    query: GET_USERS,
    variables: {
      options:{
        paginate:{
          limit: 20,
          page:1
        }
      }
    }
  })

  let users = data.users.data ? data.users.data : []
  users = randomizeArray(users)

  return users
}

export default async function page() {
  let users = await fetchData()
  return (
    <>
      <h1 className={`text-2xl text-primary-dark font-semibold mb-5 ${headerFont.className}`} > All Users </h1>
      <div className="space-y-5" >
        {
          users.map((user,index)=>(
            <UserSuggested user={user} key={index} />
          ))
        }
      </div>
    </>
  )
}
