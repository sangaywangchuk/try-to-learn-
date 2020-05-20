import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipesModel} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  public recipeName = ['rice', 'apple', 'juice', 'noodle'];
  public description = ['simply this is rice', 'simply this is apple', 'simply this is juice', 'simply this is noodle'];
  public imagePath =  ['https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
                      'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg',
                      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg',
                      'https://i.ytimg.com/vi/0SPwwpruGIA/maxresdefault.jpg'];

  public i: number;
  recipes: RecipesModel[] = [];
  @Output() recipeWasSelected = new EventEmitter<RecipesModel>();
  addRecipe(){
    for (this.i = 0; this.i < this.recipeName.length; this.i++){
      this.recipes[this.i] = new RecipesModel(this.recipeName[this.i], this.description[this.i], this.imagePath[this.i]);
    }
    return this.recipes;
  }
  onRecipeSelected(recipe: RecipesModel){
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {
    this.addRecipe();
  }
  ngOnInit(): void {
  }

}
