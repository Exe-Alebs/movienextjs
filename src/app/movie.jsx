import Link from "next/link" 
import Image from "next/image"

export default function Movie({ title, release_date, poster_path, id }) {
    const imagePath = "https://image.tmdb.org/t/p/original";
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h2 className="text-xl font-bold">{release_date}</h2>
            <Link href={`/${id}`}>
                <Image
                    src={imagePath + poster_path}
                    alt={title}
                    width={300}
                    height={450}
                    priority
                />
            </Link>
     </div>
    );
}