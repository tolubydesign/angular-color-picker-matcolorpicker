// tslint:disable: quotemark
import { Component, OnInit, NgModule } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgModel } from "@angular/forms";
// import { COLORS } from "../mock-data";
import { Color } from "../ColorsClass";
import {
  ButtonPressedColours,
  ShadededColour,
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
  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}
  /* colors */
  colorsUserValueSets: Color[];
  /* */

  /* working with Stepers */
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  /* end Steppers */

  valueSetting: Color[] = [
    {
      start: {
        logo: {
          url: "https://picsum.photos/800/300",
          height_percentage: 14
        },
        sub_logo_text_colour: "#FFFFFF",
        background_url: "https://picsum.photos/200/300",
        footer_logo_url: "https://picsum.photos/200/300",
        footer_logo_text_colour: "#FFFFFF",
        shades: {
          colour_1: "",
          colour_2: "",
          colour_3: ""
        },
        start_button: {
          border_1_colour: "",
          border_2_colour: "",
          border_3_colour: "",
          fill_colour: "",
          text_colour: "",
          pressed: {
            border_1_colour: "",
            border_2_colour: "",
            border_3_colour: "",
            fill_colour: "",
            text_colour: ""
          }
        }
      }
    }
  ];

  // make start button class - pressed is also a type start button. BUT it doesn't contain a pressed
  // inheritance of class. Constructors.
  // On the Model StartButton - create a method getKeys which returns a string array of keys  - border_1_colour.... pressed_border_colour
  // method set colour (key, value) notation. pressed.border_1_colour border_1_colour
  // Start Button:

  // border_1_colour: "",
  // border_2_colour: "",
  // border_3_colour: "",
  // fill_colour: "",
  // text_colour: "",
  customise = new Customise(new ShadededColour());
  customiseKeys = Object.getOwnPropertyNames(this.customise);

  public shadedColourValues = new ShadededColour();
  public buttonPressedColours = new ButtonPressedColours();
  public startButtonColours = new ButtonPressedColours();
  // public lengthOfShaded: number = Object.keys(this.shadedColourValues).length;
  // public shadedColoursArray = new Array(this.lengthOfShaded);
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

  ColourValues(): Observable<any> {
    const userColourValues = "../data/values.json";
    return this.http.get(userColourValues);
  }

  /* collection of click functions */

  // Shade Colours
  public onSelectedShades(level1Key: string, level2key: string, colour: string) {
    console.log("onSelectedShades", level1Key, level2key);
    this.customise[level1Key][level2key] = colour;
    console.log("value is now:", this.customise);
  }
  // public onSelectedShades(e: string, value) {
  //   console.log("onSelectedShades", level1Key, level2key);
  //   this.customise[level1Key][level2key] = colour;
  //   console.log("value is now:", this.customise)
  // }

  public getKeys(obj: any): string[] {
    return Object.getOwnPropertyNames(obj);
  }


  // onSelectedShadesTwo(e: string) {
  //   console.log(":: 2 value", { e });
  //   e === "none" ? null : this.shadedColourValues.colourTwo = e;
  //   console.log(":: 2", this.shadedColourValues);
  // }
  // onSelectedShadesThree(e: string) {
  //   console.log(":: 2 value", { e });
  //   e === "none" ? null : (this.shadedColourValues.colourThree = e);
  //   console.log(":: 2", this.shadedColourValues);
  // }

  // COMBINED START BUTTON COLOURS (LOOP)
  onSelectedStartButtonColours(e: string, colour: string) {
    console.log({e});
    console.log({colour})
    
  } 

  // Border Colours
  onSelectedStartBorderOne(e: string) {
    console.log(":: 2 value", { e });
    this.buttonPressedColours.borderOneColour = e;
    console.log(":: 2", this.shadedColourValues);
  }
  onSelectedStartBorderTwo(e: string) {
    console.log(":: 2 value", { e });
    this.buttonPressedColours.borderTwoColour = e;
    console.log(":: 2", this.shadedColourValues);
  }
  onSelectedStartBorderThree(e: string) {
    console.log(":: 2 value", { e });
    this.buttonPressedColours.borderThreeColour = e;
    console.log(":: 2", this.shadedColourValues);
  }

  // Fill Colour
  onSelectedStartFill(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.start_button.fill_colour = e;
    console.log(":: 2", this.valueSetting);
  }

  // Text Colour
  onSelectedStartText(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.start_button.text_colour = e;
    console.log(":: 2", this.valueSetting);
  }

  // Pressed Colours
  onSelectedPressedBorderOne(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.start_button.pressed.border_1_colour = e;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedPressedBorderTwo(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.start_button.pressed.border_2_colour = e;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedPressedBorderThree(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.start_button.pressed.border_3_colour = e;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedPressedFill(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.start_button.pressed.fill_colour = e;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedPressedText(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.start_button.pressed.text_colour = e;
    console.log(":: 2", this.valueSetting);
  }

  // saving colours
  onSave() {
    return;
  }
}

