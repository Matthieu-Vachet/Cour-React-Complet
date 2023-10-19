3 - Interpoler les variables

Le gros avantage que va nous offrir cette syntaxe est la possibilité de pouvoir interpoler des variables au niveau de la structure HTML. Cette interpolation se fait à l'aide d'accolade.

```jsx
const text = 'Hello les gens'
const id = 'monid'
export function App () {
    return <h1 id={id}>{text}</h1>
}
```

Dans le cadre du JSX plusieurs éléments constituent des enfants valides :

- Une chaine de caractère
- Une valeur null, undefined ou false
- Un tableau d'éléments JSX

Cette règle va permettre d'utiliser du javascript au milieu d'éléments HTML afin de conditionner leur affichage.

```jsx
<>
    {title && <h1>{title}</h1>}
    <p>Mon texte</p>
</>
```

On aura aussi la possibilité d'utiliser des tableaux pour créer plusieurs enfants (on utilisera très souvent la fonction map()) . Dans le cas d'un tableau, il faudra rajouter un attribut key (unique pour chaque élément) pour spécifier une clé à chaque enfant (React utilise cette clef pour garder une trace de l'élément dans le DOM).

```jsx
const todos = [
    'Tâche 1',
    'Tâche 2',
    'Tâche 3'
]
export function App () {
    return <>
        <h1>Ma todolist</h1>
        <ul>
            {todos.map(todo => (<li key={todo}>{todo}</li>))}
        </ul>
    </>
}
```