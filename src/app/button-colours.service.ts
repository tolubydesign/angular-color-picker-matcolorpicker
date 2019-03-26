// tslint:disable: quotemark
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColourStyling, ColourStylingAdapter } from './button-colours.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ButtonColoursService {

  public baseUserColourValues = "./data/values.json";
  public b: any = this.baseUserColourValues as string;

  constructor(
    private http: HttpClient,
    private adapter: ColourStylingAdapter,
    ) { }

  ModelColourValues(): Observable<ColourStyling[]> {
    const colourValues = `${this.baseUserColourValues}/`;
    // return this.http.get<ColourStyling[]>(url);
    console.log(':: FUNCTION ModelColourValues');
    return this.http.get(colourValues).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }
}
