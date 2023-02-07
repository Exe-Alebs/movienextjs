 import Image from "next/image";

// // export async function generateStaticparams() {
// //     const data = await fetch(
// //         `https://api.themoviedb.org/3/movie/?api_key=${process.env.API_KEY}`
// //     )
// //     const res = await data.json()

// //     return res.results.map((movie) => ({
// //         movie: toString(movie.id),
// //     }))
// // }

// export default async function MovieParams({ params }) {
//     const { movie} = params
//     const imagePath = "https://image.tmdb.org/t/p/original"
//     const data = await fetch (
//         `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`  
//     )
//     const res = await data.json()

//     return (
//         <>
//          <div>
//         <h1 className="text-2xl font-bold">{res.title}</h1>
//         <h2 className="text-xl font-bold">{res.release_date}</h2>
//         <h2> Runtime: {res.runtime} minutes </h2>
//         <h2 className="bg-yellow-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
//         {ress.status} 
//         </h2>
//         <Image
//         className="my-12 w-full"
//         src={`${imagePath}${res.poster_path}`}
//         alt={res.title}
//         width={300}
//         height={450}
//         priority
//         />  
//         </div>
//         <div className="my-10">
//             <p className="text-xl font-bold">{res.overview}</p>
//         </div>
//         </>
// )}
 
 export default async function MovieDetail( params){
    const { movie } = params;     
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}api_key=${process.env.API_KEY}`
       )
       const res = await data.json()
    return (
        <div>
        <div>
            <h2 className="text-lg">{res.title}</h2>
            <h2 className="text-lg">{res.release_date}</h2>
            <h2 className="bg-yellow-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">{res.status}</h2>
            <h2> Runtime: {res.runtime} minutes </h2>
            <Image alt="movie"/>
        </div>
        </div>
    )
 }
 