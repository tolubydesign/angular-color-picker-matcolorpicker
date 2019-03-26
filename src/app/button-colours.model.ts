// tslint:disable: quotemark
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { StartingButton } from "./button";

export class ColourStyling {
  // public borderOneColour: string;
  // public borderTwoColour: string;
  // public borderThreeColour: string;
  // public fillColour: string;
  // public textColour: string;
  /* */
  constructor(
    public borderOneColour?: string,
    public borderTwoColour?: string,
    public borderThreeColour?: string,
    public fillColour?: string,
    public textColour?: string
  ) {
    //   this.borderOneColour = borderOneColour;
    //   this.borderTwoColour = borderTwoColour;
    //   this.borderThreeColour = borderThreeColour;
    //   this.fillColour = fillColour;
    //   this.textColour = textColour;
  }
}

@Injectable({
  providedIn: 'root'
})

export class ColourStylingAdapter implements Adapter<ColourStyling> {

adapt(item: any): ColourStyling {
  return new ColourStyling(
    item.borderOneColour,
    item.borderTwoColour,
    item.borderThreeColour,
    item.fillColour,
    item.textColour,
  );
}
}
