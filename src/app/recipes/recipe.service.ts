import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
		new Recipe('A Test Recipe 1', 'This is simply a test 1', 
			'https://upload.wikimedia.org/wikipedia/commons/8/84/Mutton_Biriyani_-_Rich_Maha%2C_Vermont_South_%28184564933%29.jpg'),
		new Recipe('A Test Recipe 2', 'This is simply a test 2', 
			'https://upload.wikimedia.org/wikipedia/commons/8/84/Mutton_Biriyani_-_Rich_Maha%2C_Vermont_South_%28184564933%29.jpg')
	];

    getRecipes() {
        return this.recipes.slice();
    }
}