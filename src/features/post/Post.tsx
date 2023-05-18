import UserCardHeader from '@/components/UserCardHeader'


export default function Post({
  withUser
}:{
  withUser?:boolean
}) {
  return (
        <div className="block mx-auto m-4 flex-none max-w-sm bg-white border border-gray-50 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <UserCardHeader withUser={withUser} />
            <p className="font-normal px-4 py-1 text-gray-700 dark:text-gray-400"> {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsum omnis a vitae fugiat voluptatibus, consectetur explicabo tempore quo eum praesentium ipsa nihil laborum reiciendis numquam, rem dignissimos nemo excepturi.`}  </p>
            <div className="px-4 py-1.5 font-bold text-gray-900 dark:text-white">
                {`2 comments`}
            </div>
        </div>
  )
}
