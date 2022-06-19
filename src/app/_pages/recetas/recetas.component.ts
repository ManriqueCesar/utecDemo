import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recipeList : any;  
  recipe: any;
  temp: any;

  caloriesList:any;
  caloriesQuant: number;

  recipeRandomList: any;
  recipeRandomListValue: any;

  rangeValues: number[] = [0,800];
  arreglo = [];

  constructor( private recetaService: RecetaService) { }

  ngOnInit(): void {
    this.getRandomRecipe();
  }

  getRecipe(){
    this.caloriesList= null;
    this.recetaService.searchByName(this.recipe).subscribe(data => {
      this.temp = data;
      this.recipeList = this.temp.results;
    })
  }

  getByMaxCalories(){
    this.recipeList=null;
    console.log(this.rangeValues);
    this.recetaService.searchByCalories(this.rangeValues).subscribe(data => {
      this.temp = data;
      this.caloriesList = this.temp.results;
    })
  }

  getRandomRecipe(){

    this.recetaService.getRandomRecipe().subscribe(data => {
      this.temp = data;
      this.recipeRandomList = this.temp.recipes;
      //this.recipeRandomList = this.toObject(this.recipeRandomList);
      this.recipeRandomList.forEach(element => {
        this.arreglo.push(element.title);
      });
      console.log(this.arreglo);
    });
  }


   toObject(array) {
    var rv = {};
    for (var i = 0; i < array.length; ++i)
      rv[i] = array[i];
    return rv;
  }


}
