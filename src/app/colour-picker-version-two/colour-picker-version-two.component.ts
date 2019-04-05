// tslint:disable: quotemark
import { Component, OnInit, NgModule } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgModel } from "@angular/forms";
// import { COLORS } from "../mock-data";
import { Color } from "../ColorsClass";
import {
  ButtonPressedColours,
  ShadedColour,
  Colours,
  Start, Pressed,
  Customise
} from "../button";
// for model to work
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
@Component({
  selector: "app-colour-picker-version-two",
  templateUrl: "./colour-picker-version-two.component.html",
  styleUrls: ["./colour-picker-version-two.component.scss"]
})
@NgModule({
  declarations: [FormGroup, FormBuilder, Validators]
})
export class ColourPickerVersionTwoComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder, private http: HttpClient) { }
  /* colors */
  colorsUserValueSets: Color[];
  /* */

  /* working with Stepers */
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  /* end Steppers */


  customise = new Customise(new ShadedColour());
  customiseKeys = Object.getOwnPropertyNames(this.customise);

  startingColours = new Start(new Colours());
  startingColourSet = Object.getOwnPropertyNames(this.startingColours);

  pressedColours = new Pressed(new Colours());
  pressedColourSet = Object.getOwnPropertyNames(this.pressedColours);

  /* */

  public shadedColourValues = new ShadedColour();
  public buttonPressedColours = new ButtonPressedColours();
  public startButtonColours = new ButtonPressedColours();
  public baseUserColourValues = "../data/values.json";

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [""]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [""]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: [""]
    });
    console.log(this.buttonPressedColours);
    console.log(":: OBJECT first key", Object.keys(this.shadedColourValues)[0]);
    // console.log(Object.keys(this.shadedColourValues).length);
    console.log(Object.getOwnPropertyNames(this.customise));
  }

  public getKeys(obj: any): string[] {
    return Object.getOwnPropertyNames(obj);
  }

  /* collection of click functions */

  // COMBINED SHADED COLOURS (LOOP)
  public onSelectedShades(level1Key: string, level2key: string, colour: string) {
    console.log("onSelectedShades", level1Key, level2key);
    this.customise[level1Key][level2key] = colour;
    console.log("value is now:", this.customise);
  }

  // COMBINED START BUTTON COLOURS (LOOP)
  onSelectedStartButtonColours(e: string, a: string, colour: string) {
    // console.log({e});
    console.log({ a });
    this.startingColours[e][a] = colour;
    console.log('current value', this.startingColours);
  }

  // COMBINED PRESSED BUTTON COLOURS (LOOP)
  onSelectedPressedColours(Value1: string, Value2: string, colour) {
    console.log({ Value2 });
    this.pressedColours[Value1][Value2] = colour;
    console.log('current pressed value', this.pressedColours);
  }

  // saving colours
  onSave() {
    // console.log(':: current SHADE values', this.customise);
    // console.log(':: current START values', this.startingColours);
    // console.log(':: current PRESSED values', this.pressedColours);
    const valueCollection = [this.customise, this.startingColours, this.pressedColours];
    console.log(valueCollection);
  }
}
