import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Cookie','A Banana Cookie','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3w385vODPcLligKz41e6In9rjzhWiYJ9Pkhh3VAlvzbBMmLvF'),
    new Recipe('Tantoori Chicken','Tantoori Kebap','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvHia79vbWB9UaN7MjxEulucFfMGdYh_0WC4Sh0z7vHgSojnYy')
  ]
  constructor() { }

  ngOnInit() {
  }

  selectedRecipeItem(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}