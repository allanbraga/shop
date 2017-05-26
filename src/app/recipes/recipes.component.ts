import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./service/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeSelected:Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe) => {this.recipeSelected = recipe} );
  }

}
