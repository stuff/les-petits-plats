import { getIngredients } from './../../data/recipesData.js';

const mainSearch = 'gateau';
const selectedAppliance = 'casserole';
const selectedUstensils = ['couteau', 'casserole'];
const selectedIngredients = ['pomme', 'chocolat'];

const recipies = {
  /* */
};

function filterRecipes(query, queryOpptions) {

}

filterRecipes('');
filterRecipes('', { appliance: 'casserole' });
filterRecipes('', {
  appliance: 'casserole',
  ingredients: ['pomme', 'chocolat'],
});


function filterIngredients(query) {
    
}

filterIngredients(''); // 
filterIngredients('coc'); // 


onclick(ingredient) {
    selectedIngredients.push(ingredient);
    buildMainResults()
    buildIngredients();
}

function buildMainResults(){
//     const mainSearch = 'gateau';
// const selectedAppliance = 'casserole';
// const selectedUstensils = ['couteau', 'casserole'];
// const selectedIngredients = ['pomme', 'chocolat'];

    const results = filterRecipes(mainSearch, { ingredients: selectedIngredients});

    
}

// expect(filterIngredients('coc')).toEqual(['Coco']);
// expect(filterIngredients('c')).toEqual(['Coco', 'Chocolat', 'Creme']);



