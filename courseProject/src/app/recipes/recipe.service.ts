import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'French Toast',
      'The best French Toast EVER!',
      'https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/43/2022/03/08/7016-french-toast-mfs-010.jpg&w=640&h=360&q=90&c=cc',
      [new Ingredient('bread (Texas Toast)', 1), new Ingredient('eggs', 3)]
    ),
    new Recipe(
      'Traditional Toast of France',
      'A Tradition unlike any other',
      'https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/43/2022/03/08/7016-french-toast-mfs-010.jpg&w=640&h=360&q=90&c=cc',
      [new Ingredient('french bread', 1.5), new Ingredient('eggs', 4)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addToShoppingList(ingredients);
  }
}
