8 - TP React Liste de produit

À propos de ce tutoriel

Dans ce chapitre je vous propose de pratiquer un peu tout ce que l'on a vu jusqu'à maintenant à travers un exemple concret. Cet exemple sera aussi l'occasion de voir comment il faut réfléchir avec React.

L'objectif de cet exercice est de créer un système de listing produit avec une fonctionnalité de recherche et de filtre.

```js
const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]
```
Avec une interface qui ressemblera à ça :

(Photo dans src/asset )