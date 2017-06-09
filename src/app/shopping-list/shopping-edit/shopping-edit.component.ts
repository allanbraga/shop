import {Component, OnInit, OnDestroy, ViewChild} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../service/shopping.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  subscription: Subscription;
  editMode = false;
  editItemIndex:number;
  editItem:Ingredient;
  @ViewChild('f') formControl:NgForm;
  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {

    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index : number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingService.getIngredient(index);
        this.formControl.setValue({
          name:this.editItem.name,
          amount:this.editItem.amount
        });
      }
    );
  }
  onAddItem(form:NgForm){
    const ingredient = new Ingredient(form.value.name,form.value.amount);
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editItemIndex,ingredient);
    }else{
      this.shoppingService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear(){
    this.formControl.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

}
