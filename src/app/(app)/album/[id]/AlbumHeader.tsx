import { Album } from '@/datas/types'
import { headerFont } from '@/datas/fonts'


export default function AlbumHeader ({
    album
  }:{
    album: Album
  }){
  
    return (
      <section id="album-header" className={`${headerFont.className} bg-gray-100 dark:bg-gray-800`}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"> {album.title} </h1>
          <div className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            <span> {album.user?.username} </span> - <span> {`${album.photos?.data?.length} Photos`} </span>
          </div>
        </div>
      </section>
    )
}