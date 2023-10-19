// import { Fragment } from "react"

const title = "Interpoler les variables"
const placeHolder = "Votre texte ici"
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et autem, hic assumenda necessitatibus quisquam quas inventore! Tenetur nobis cum, iusto autem ipsum sit laboriosam numquam eligendi porro, quasi enim."

const showTitle = true /** Afficher le titre si true */

function App() {

  
  return <div> 

    {/* logique conditionnel showTitle (Affiche le titre si condition et true) */}
    {showTitle ? <h1 id="title" className="title"
     style={{color: "red", backgroundColor: "yellow"}}>Cour : {title} </h1> :
     <p>Demo</p>}
    
    <input type="text" placeholder={placeHolder}/> 
    
    <p>
      {text}
    </p>
    
  </div>

}

export default App
