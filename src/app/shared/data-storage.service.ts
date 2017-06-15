import {Injectable} from "@angular/core";
import {Headers,Http,Response} from '@angular/http';
import 'rxjs/Rx';
import {RecipeService} from "../recipes/service/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {

  constructor(private http:Http , private recipeService:RecipeService , private authService:AuthService){}

  storeRecipes(){
    const headers = new Headers({'Content-type':'application/json'});
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-1584a.firebaseio.com/recipes.json?auth='+token,this.recipeService.getRecipes(),{headers:headers});
  }

  fetchRecipes(){
    const token = this.authService.getToken();
    this.http.get('https://ng-recipe-book-1584a.firebaseio.com/recipes.json?auth='+token)
      .map(
        (response:Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes){
            if(!recipe['ingredients']){
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
      (recipes:Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      },
      (error:Response) => {
        console.log(error);
      }
    );
  }

}
