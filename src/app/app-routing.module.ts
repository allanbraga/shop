import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuardService} from "./auth/auth-guard.service";
const appRoutes : Routes =  [
  {path:'', component:HomeComponent},
  {path:'recipes', loadChildren:'./recipes/recipe.module#RecipeModule', canLoad: [AuthGuardService] }, // how to implement lazy loading
  {path:'shopping-list',component:ShoppingListComponent}
];

@NgModule(
  {
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
  }
)
export class AppRoutingModule {

}
