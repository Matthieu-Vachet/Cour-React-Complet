5 - La logique conditionnel

 La logique conditionnelle en React concerne l'utilisation de déclarations conditionnelles pour rendre des éléments en fonction de certaines conditions. Cela vous permet de contrôler l'affichage de votre interface utilisateur en fonction de l'état de l'application. Voici un exemple simple :

 Supposons que vous ayez une variable d'état estConnecte qui indique si un utilisateur est connecté ou non. Vous pouvez utiliser une instruction if pour conditionner le rendu de composants en fonction de cette variable. Voici un exemple en utilisant React :

 import React, { useState } from 'react';

```js
function MonComposant() {
  const [estConnecte, setEstConnecte] = useState(false);

  return (
    <div>
      {estConnecte ? (
        <p>Utilisateur connecté</p>
      ) : (
        <p>Utilisateur non connecté</p>
      )}
    </div>
  );
}
```

export default MonComposant;

