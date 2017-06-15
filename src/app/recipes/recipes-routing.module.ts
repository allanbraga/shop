import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipesStartComponent} from "./recipes-start/recipes-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {AuthGuardService} from "../auth/auth-guard.service";

const recipeRoutes : Routes =  [
  {path:'',component:RecipesComponent , children:[
    {path:'', component:RecipesStartComponent},
    {path:'new', component:RecipeEditComponent , canActivate : [AuthGuardService]},
    {path:':id', component:RecipeDetailComponent,canActivate : [AuthGuardService]},
    {path:':id/edit', component:RecipeEditComponent , canActivate : [AuthGuardService]}

  ]}
];

@NgModule(
  {
    imports:[RouterModule.forChild(recipeRoutes)],
    exports:[RouterModule]
  }
)
export class RecipesRoutingModule {

}
