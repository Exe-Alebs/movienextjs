import Movie from "./Movie"


export default async function Home() {
   const data = await  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
   )
   const res = await data.json()
   console.log(res)
  
  return (
    <main>
      <div className= "grid grid-cols-fluid gap-16">
        <h1 className="text-[#d71e1e] "> WELCOME TO ALEBS MOVIE APP </h1> 
        {res.results?.map((movie) =>
        (
          <Movie 
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date} 
            poster_path={movie.poster_path}
            overview={movie.overview}
            id={movie.id}
          />
        ))}
      </div>
    </main>
  )
}
  
