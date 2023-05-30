
export default function UserCardHeaderLoader() {
  return (
    <div className="px-4 py-1.5 flex items-center gap-x-4 dark:text-white">
      <div className="w-10 h-10 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse"/>
      <div className=" animate-pulse" >
        <h3 className={`h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24`}/>
        <small className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-24 -mt-1"/>
      </div>
    </div>
  );
}
