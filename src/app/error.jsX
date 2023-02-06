"use client"

export default function Error({error, reset}) {
  return (
    <div>
      The page is not loading: {error.message}
      <button onClick={() => reset()}> Try again</button>
    </div>
  )
}