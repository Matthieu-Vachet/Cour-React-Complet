import { useState } from 'react'

// Formulaire controlé
function App() {

  const [firstname, setFirstname] = useState('Matthieu Vachet')

  const handleChange = (e) => {
    setFirstname(e.target.value)
  }

  const reset = () => {
    setFirstname('')
  }

  return <form>
    <input type='text' name='firstname' value={firstname} onChange={handleChange}/>
    {firstname}
    <button onClick={reset} type='button'>Reset</button>
  </form>

}

export default App



// Formulaire non controlé

// function App() {

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(new FormData(e.target))
//   }

//   return <form onSubmit={handleSubmit}>
//     <input type='text' name='firstname' defaultValue='Matthieu Vachet'/>
//     <button>Envoyer</button>
//   </form>

// }
