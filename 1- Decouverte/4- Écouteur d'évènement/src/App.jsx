// import { Fragment } from "react"

const title = "Interpoler les variables"
const placeHolder = "Votre texte ici"
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et autem, hic assumenda necessitatibus quisquam quas inventore! Tenetur nobis cum, iusto autem ipsum sit laboriosam numquam eligendi porro, quasi enim."

function App() {

  // Fonction écouteur d'évènement
  const handleClick = (e) => {
    e.preventDefault() /* Annuler le comportement par défaut */
    alert("Vous avez cliquer sur le bouton")
  }
  
  return <div> 

    {/* Ecouteur d'évènement onClick={handleClick} */}
    <h1 onClick={handleClick} id="title" className="title" style={{color: "red", backgroundColor: "yellow"}}>Cour : {title} </h1>
    
    <input type="text" placeholder={placeHolder}/> 
    
    <p>
      {text}
    </p>
    
  </div>

}

export default App
