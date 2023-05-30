import UserCardHeaderLoader from '@/components/loaders/UserCardHeader';


export default function PostLoader() {

  return (
    <>
      {/* If loading, send loading Post component / create it */}
      <div className="block mx-auto m-4 flex-none max-w-sm bg-white border border-gray-50 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <UserCardHeaderLoader/>
          <div className="px-4">
            <p className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full my-2 animate-pulse"/>
            <p className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 animate-pulse"/>
            <p className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"/>
            <div className="px-4 py-1.5 font-bold text-gray-900 dark:text-white">
                <span className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px] animate-pulse"/>
            </div>
          </div>
      </div>
    </>
  )
}
