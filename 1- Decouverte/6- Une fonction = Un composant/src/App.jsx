

const placeHolder = "Votre texte ici"
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et autem, hic assumenda necessitatibus quisquam quas inventore! Tenetur nobis cum, iusto autem ipsum sit laboriosam numquam eligendi porro, quasi enim."

const showTitle = true /** Afficher le titre si true */

function App() {

  
  return <div> 

    <title color="red">Mon composant</title> {/* On peut changer la couleur et le text grace au parametre de la fonction */}

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

function title ({ color, children }) {
  return <h1 style={{color: color}}>{children}</h1>
}
