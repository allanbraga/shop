import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../service/shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') name : ElementRef;

  @ViewChild('inputAmount') amount : ElementRef;

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
    
  }

  onAddItem(){
    this.shoppingService.addIngredient(new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value));
  }

}
