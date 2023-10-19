4 - Écouteur d'évènement

La syntaxe JSX permettra aussi de brancher des écouteurs d'événements facilement sur nos éléments HTML. Cela se fera au travers d'attributs commençant par on qui recevront en paramètre une fonction qui sera exécutée lorsque l'événement est déclenché.

```jsx
export function App () {
    const doSomething = () => {
        alert('Bonjour !')
    }

    return <div onClick={doSomething}>Bonjour les gens</div>
}
```

Ses fonctions recevront en paramètre un événement sur lequel il sera possible d'utiliser des méthodes similaires à celles que l'on connaît pour les événements natifs du navigateur.

```jsx
export function App () {
    const doSomething = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    return <form onSubmit={doSomething}>Bonjour les gens</div>
}
```