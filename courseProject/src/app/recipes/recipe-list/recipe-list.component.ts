import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe1',
      'Test Description1',
      'https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/43/2022/03/08/7016-french-toast-mfs-010.jpg&w=640&h=360&q=90&c=cc'
    ),
    new Recipe(
      'Test Recipe2',
      'Test Description2',
      'https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/43/2022/03/08/7016-french-toast-mfs-010.jpg&w=640&h=360&q=90&c=cc'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
