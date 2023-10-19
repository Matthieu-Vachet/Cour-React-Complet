// import { Fragment } from "react"

const title = "Interpoler les variables"
const placeHolder = "Votre texte ici"
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et autem, hic assumenda necessitatibus quisquam quas inventore! Tenetur nobis cum, iusto autem ipsum sit laboriosam numquam eligendi porro, quasi enim."

const todos = [
  'Tâche 1',
  'Tâche 2',
  'Tâche 3'
]


function App() {
  
  return <div> 
    {/* Ou : <Fragment> </Fragment> ou : <></> */}

    <h1 id="title" className="title" style={{color: "red", backgroundColor: "yellow"}}>Cour : {title} </h1>
    
    <input type="text" placeholder={placeHolder}/> {/* Les balise doivent toujour étre fermer */}
    
    <p>
      {text}
    </p>
   
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
    
  </div>

}

export default App
