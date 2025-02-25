import { useState, useEffect } from 'react'

const arrayFilms = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {
  // let's do the logic of the state variable, so create the array in dinamic way
  const [films, setFilms] = useState(arrayFilms)



  //filter films by genre
  const [filteredByGenre, setFilteredByGenre] = useState("")

  useEffect(() => {


  }, [films])


  const filteredGenre = films.filter(filmByGenre => {
    return filmByGenre === "" || filmByGenre.genre === filteredByGenre
  })






  return (
    <>
      <main className='container'>
        <section className='mt-4 text-center'>
          <h1>Film Disponibili </h1>

          {
            filteredGenre.map((film, index) => {
              return (
                <p key={index}>
                  {film.title}

                </p>

              )

            })
          }


        </section>
        <section className='container '>

          <select name="films" id="films" value={filteredByGenre} onChange={(e) => setFilteredByGenre(e.target.value)}>
            <option value="" >Tutti i film</option>

            {
              films.map((film, index) => {
                return (
                  <option key={index} value={film.genre}>{film.genre}</option>
                )

              })
            }
          </select>
        </section>
      </main>
    </>
  )
}

export default App
