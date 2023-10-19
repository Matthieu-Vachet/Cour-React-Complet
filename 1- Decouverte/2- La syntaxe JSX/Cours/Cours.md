Les balises doivent être systématiquement fermées : <img src="" alt=""/>

---------------------------

Les attributs sont écrit en camelCase sauf pour les attributs commençant par data- et aria- : <input autoFocus/>

---------------------------

L'attribut class s'écrira className (pour éviter les conflits avec le mot clef class en JavaScript)

---------------------------

L'attribut for s'écrira htmlFor (pour éviter les conflits avec le mot clef for en JavaScript).

---------------------------

L'attribut style s'écrira sous forme d'objet avec les propriétés CSS écrites en camelCase <div style={{width: 50, height: 50, backgroundColor: 'blue'}}/>

---------------------------

Vous pouvez convertir du code HTML en JSX en utilisant des outils de conversion:
https://transform.tools/html-to-jsx

---------------------------

Un autre point important est qu'une fonction ne doit renvoyer qu'un seul noeud JSX racine. Cependant, si on ne souhaite pas ajouter un élément HTML il est possible d'utiliser un fragment:

```jsx
export function App () {
    return <>
        <p>Premier paragraphe</p>
        <p>Second paragraphe</p>
    </>
}
```