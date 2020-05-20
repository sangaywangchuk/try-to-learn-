import {Component, Input, OnInit} from '@angular/core';
import {RecipesModel} from '../recipes.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: RecipesModel;
  constructor() { }

  ngOnInit(): void {
  }

}
