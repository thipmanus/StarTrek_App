import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuertCharacter } from '../models/characters';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarTrekService {

  constructor(private http: HttpClient) { }

  loadCharacters(page: number): Observable<QuertCharacter> {
    return this.http.get(`http://stapi.co/api/v1/rest/character/search/?pageNumber=${page}`).pipe(
      map(data => {
        // console.log(data['characters'])
        return {
          hasNext: !data['page'].lastPage,
          characters: data['characters']
        }
      })
    )
  }
}
