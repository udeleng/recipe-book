import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('A Test Recipe 1', 'This is simply a test 1', 
			'https://upload.wikimedia.org/wikipedia/commons/8/84/Mutton_Biriyani_-_Rich_Maha%2C_Vermont_South_%28184564933%29.jpg'),
		new Recipe('A Test Recipe 2', 'This is simply a test 2', 
			'https://upload.wikimedia.org/wikipedia/commons/8/84/Mutton_Biriyani_-_Rich_Maha%2C_Vermont_South_%28184564933%29.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
