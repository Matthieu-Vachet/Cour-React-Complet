6 - Une fonction = Un composant

Lorsque l'on travaille avec React on va parler de "composants". Un composant est décrit sous la forme d'une fonction qui recevra les différents attributs sous forme d'objet et qui renverra du JSX.

```jsx
function Title ({color, children}) {
    return <h1 style={{color: color}}>{children}</h1>
}
```

Ensuite, il est ensuite possible d'utiliser ce composant comme une sorte d'élément HTML personnalisé.

```jsx
export function App () {
    return <>
        <Title color="red">Ceci est un titre</Title>
        <p>Premier paragraphe</p>
    </>
}
```

Ce découpage nous permettra d'éviter la répétition et on découpera notre application en plusieurs composants réutilisables