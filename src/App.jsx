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

  //add new task on the array 
  const [newFilm, setNewFilm] = useState('');

  // function to add the film on the array
  const addFilm = (e) => {
    e.preventDefault();
    setFilms([...films, { title: newFilm, genre: "Fantascienza" }]);//warning that's an object and not an array
    setNewFilm('');
  };

  //function to remove task
  const removeFilm = (indexClone) => {

    const filteredArray = films.filter(
      (film, index) => index !== indexClone
    );
    return setFilms(filteredArray);
  };

  return (
    <>
      <main className='container'>
        <section className='mt-4 text-center'>
          <h1>Film Disponibili </h1>

          {
            films.map((film, index) => {
              return (
                <p key={index}>
                  {film.title}
                  <button className="btn btn-danger btn-sm float-end"
                    onClick={() => removeFilm(index)}>
                    X
                  </button>
                </p>

              )

            })
          }


        </section>
        <section className='container '>
          <form onSubmit={addFilm}>
            <div className='col-4 mx-auto'>
              <input
                type="text"
                className="form-control "
                placeholder="Cosa vorresti fare?"
                name='activity'
                value={newFilm}
                onChange={(e) => setNewFilm(e.target.value)}
              />
            </div>

            <div className='row mt-3'>
              <button className="col-2 btn btn-primary mx-auto">Aggiungi</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
