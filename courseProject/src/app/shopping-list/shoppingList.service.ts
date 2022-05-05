import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('carrots', 5),
    new Ingredient('milk', 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
