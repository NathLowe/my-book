import Link from "next/link";

export default function notFound(){

    return (
        <>
            <h1 className="text-5xl text-center text-primary-main font-bold">Il n'y a rien ici! Va loin</h1>
            <Link className="text-2xl text-secondary-light" href="/">Rentre d'abord à la maison bro</Link>
        </>
    )
}