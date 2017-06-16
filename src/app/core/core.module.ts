import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {ShoppingService} from "../shopping-list/service/shopping.service";
import {RecipeService} from "../recipes/service/recipe.service";
import {DataStorageService} from "../shared/data-storage.service";
import {AuthGuardService} from "../auth/auth-guard.service";
import {AuthService} from "../auth/auth.service";
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [ShoppingService,RecipeService,DataStorageService,AuthService,AuthGuardService]
})
export class CoreModule {

}
