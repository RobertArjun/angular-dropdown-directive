import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe'

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Cookie','A Banana Cookie','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3w385vODPcLligKz41e6In9rjzhWiYJ9Pkhh3VAlvzbBMmLvF'),
    new Recipe('Tantoori Chicken','Tantoori Kebap','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvHia79vbWB9UaN7MjxEulucFfMGdYh_0WC4Sh0z7vHgSojnYy')
  ]

  recipeSelected = new EventEmitter<Recipe>(); // Provide exact copy of Array

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}