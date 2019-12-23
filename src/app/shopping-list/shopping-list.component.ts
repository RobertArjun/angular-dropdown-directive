import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('Sugar', 25)
  ];
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
  }

}