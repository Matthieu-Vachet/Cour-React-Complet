import { useState } from 'react'

function App() {

  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  })

  const [count, setCount] = useState(0)

   const incrementAge = () => {
    setPerson ({
      ...person,
      age: person.age + 1
    })
  }

  const incrementCount = () => {
    setCount(count + 1)
  }


  return <> 
  <p>Age de {person.firstName} {person.lastName} : {person.age}</p>
  <button onClick={incrementAge}>Gagner une année</button>
  <button onClick={incrementCount}>Incrémenter {count}</button>
  </>

}

export default App

