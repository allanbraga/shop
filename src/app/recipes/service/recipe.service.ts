import {Recipe} from "../recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../../shopping-list/service/shopping.service";
@Injectable()
export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simply recipe test','http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',[new Ingredient('Meat',1), new Ingredient('Banana',5)]),
    new Recipe('A Test Recipe 2','This is a simply recipe test','http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',[new Ingredient('Salada',1), new Ingredient('Pepino',5)])
  ];



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
}
