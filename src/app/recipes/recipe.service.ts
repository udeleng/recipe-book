import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
		new Recipe('Schnitzel', 'A great Schnitzel recipe', 
			'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', 
            [   
                new Ingredient('Chicken', 1), 
                new Ingredient('Potato', 2)
            ]),
		new Recipe('Falafel', 'Amazing Falafel', 
			'https://upload.wikimedia.org/wikipedia/commons/8/8b/Food_in_Israel.jpg',
            [
                new Ingredient('Chickpea Flower', 1), 
                new Ingredient('Tomatoes', 1), 
                new Ingredient('Pita', 2)
            ])
	];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}