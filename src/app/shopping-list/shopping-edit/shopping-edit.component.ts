import { Component, OnInit, ViewChild, EventEmitter, ElementRef, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: true}) name: ElementRef;
  @ViewChild('amountInput',{static: true}) amount: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    this.IngredientAdded.emit(new Ingredient(ingName, ingAmount));
  }

}