import {Component, OnInit, ViewChild, EventEmitter, ElementRef, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') name : ElementRef;

  @ViewChild('inputAmount') amount : ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    this.ingredientAdded.emit(new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value));
  }

}
