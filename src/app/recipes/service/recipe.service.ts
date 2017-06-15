import {Recipe} from "../recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../../shopping-list/service/shopping.service";
import {Subject} from "rxjs/Rx";
@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private shoppingService:ShoppingService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }

  getRecipe(id:number){
    return this.recipes.slice()[id];
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number , newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
