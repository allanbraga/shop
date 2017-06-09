import {Ingredient} from "../../shared/ingredient.model";
import {Subject} from "rxjs/Rx";
export class ShoppingService{
  private ingredients: Ingredient []= [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  ingredientChanges = new Subject<Ingredient[]>();

  startedEditing  = new Subject<number>();

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanges.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanges.next(this.ingredients.slice());
  }
  getIngredient(index:number){
    return this.ingredients.slice()[index];
  }
  updateIngredient(index:number , newIngredient : Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientChanges.next(this.ingredients.slice());
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientChanges.next(this.ingredients.slice());
  }

}
