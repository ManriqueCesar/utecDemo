import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  apiRoute : string =  'https://api.spoonacular.com/recipes';
  apiKey: string =  '725983bc90864f7aa772b82594239d53';

  constructor(private http: HttpClient) { }



  searchByName(recipe: string) {
    return this.http.get(this.apiRoute+'/complexSearch?apiKey='+this.apiKey+'&query='+recipe, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  searchByCalories(rangeValues: number[]) {
    return this.http.get(this.apiRoute+'/complexSearch?apiKey='+this.apiKey+'&minCalories='+rangeValues[0]+'&maxCalories='+rangeValues[1], {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  getRandomRecipe() {
    return this.http.get(this.apiRoute+'/random?apiKey='+this.apiKey+'&number=10', {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }
}
