import dropDownComponent from './dropDownComponent.js';
import recipesData from '/data/recipesData.js';




const ingredients = recipesData.reduce((acc, current) => {
    const i = current.ingredients;
    current.ingredients.forEach(element => {
        if (acc.includes(element.ingredient)) {
            return false;
        }
        acc.push(element.ingredient);
    });
    return acc;jkhkdjsh
}, []).sort();

const targetElement = document.getElementById('dropdown-target');
const targetElement2 = document.getElementById('dropdown-target2');

const component = dropDownComponent(targetElement, {
    label: 'Ingrédients',
    // color: 'red',
    placeholder: 'Rechercher un ingrédient',
    list: ingredients,
    onSelect(selectedItem) {
        console.log(selectedItem);
    }
});


const bt = document.getElementById('bt');
bt.addEventListener('click', () => {
    component.toggle();
});


dropDownComponent(targetElement2, {
    label: 'Test',
    color: 'red',
    placeholder: 'Rechercher un ingrédient',
    list: ingredients,
    onSelect(selectedItem) {
        console.log(selectedItem);
    }
});
