import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "./service/shopping.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients: Ingredient[];
  private subscription : Subscription;

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientChanges.subscribe((ingredients:Ingredient[]) => {this.ingredients = ingredients} );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(index:number){
    this.shoppingService.startedEditing.next(index);
  }

}
