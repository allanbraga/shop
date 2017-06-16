import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {HomeComponent} from "./core/home/home.component";
const appRoutes : Routes =  [
  {path:'', component:HomeComponent},
  {path:'recipes', loadChildren:'./recipes/recipe.module#RecipeModule', canLoad: [AuthGuardService] }, // how to implement lazy loading
  {path:'shopping-list',component:ShoppingListComponent}
];

@NgModule(
  {
                                             // property to allow angular pre load all lazy modules
    imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
  }
)
export class AppRoutingModule {

}
