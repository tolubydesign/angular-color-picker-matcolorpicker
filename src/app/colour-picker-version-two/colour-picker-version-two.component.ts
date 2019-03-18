// tslint:disable: quotemark
import { Component, OnInit, NgModule } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgModel } from "@angular/forms";
// import { COLORS } from "../mock-data";
import { Color } from "../ColorsClass";
import { ButtonStyling, Pressed, TestingClassesVersionOne } from "../button";

@Component({
  selector: "app-colour-picker-version-two",
  templateUrl: "./colour-picker-version-two.component.html",
  styleUrls: ["./colour-picker-version-two.component.scss"]
})
@NgModule({
  declarations: [FormGroup, FormBuilder, Validators]
})
export class ColourPickerVersionTwoComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}
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

  getKeys() {
    return 
  }

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
    console.log(this.valueSetting);

    // Object.values(this.valueSetting[0].start.shades).forEach((value, index) => {
    //   console.log({value});
    //   console.log({index});
    // });
  }

  onChange() {
    console.log(":: 2", ":: value has changed");
  }

  onClickOut() {
    console.log(":: 2", ":: user clicked out");
  }
  /* */

  /* collection of click functions */

  // Shade Colours
  onSelectedShadesOne(e: string) {
    console.log(":: 2 value", { e });
    e === "none" ? null : (this.valueSetting[0].start.shades.colour_1 = e);
    console.log(":: 2", this.valueSetting);
  }
  onSelectedShadesTwo(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.shades.colour_2 = e;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedShadesThree(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.shades.colour_3 = e;
    console.log(":: 2", this.valueSetting);
  }

  // Border Colours
  onSelectedStartBorderOne(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.start_button.border_1_colour = e;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedStartBorderTwo(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.start_button.border_2_colour = e;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedStartBorderThree(e: string) {
    console.log(":: 2 value", { e });
    this.valueSetting[0].start.start_button.border_3_colour = e;
    console.log(":: 2", this.valueSetting);
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

const valuation = new TestingClassesVersionOne('Inferno', ['cheese', 'peppers', 'source', 'bilbo']);
console.log({valuation});

// const valid = new ButtonStyling('semi', ['segment']);
// console.log({valid});

// const valid = new ButtonStyling(['something'], ['values'])

