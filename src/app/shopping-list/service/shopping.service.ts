import {Ingredient} from "../../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
export class ShoppingService{
  private ingredients: Ingredient []= [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  ingredientChanges = new EventEmitter<Ingredient[]>();

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanges.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanges.emit(this.ingredients.slice());
  }
}
