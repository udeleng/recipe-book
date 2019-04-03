import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

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

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}