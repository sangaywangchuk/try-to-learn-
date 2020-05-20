import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public name = ['tomato', 'salt', 'pepper', 'sugar'];
  public amount = [23, 34, 45, 67];

  ingredients: Ingredient[] = [];

  listIngredient(){
    for (let i = 0; i < this.name.length ; i++){
      this.ingredients[i] = new Ingredient(this.name[i], this.amount[i]);
    }

    return this.ingredients;
  }
  constructor() {
    this.listIngredient();
  }
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
  trackByFn(index, item) {
    return index.name; // or item.id
  }

  ngOnInit(): void {
  }

}
