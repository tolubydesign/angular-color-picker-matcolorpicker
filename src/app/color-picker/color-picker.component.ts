// tslint:disable: quotemark
import { Component, OnInit, NgModule } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgModel } from "@angular/forms";
import { COLORS } from "../mock-data";
import { Color } from "../ColorsClass";

export interface Food {
  value: string;
  viewValue: string;
}

export interface MccColorPickerItem {
  text: string;
  value: string;
}

export type MccColorPickerOption = string | MccColorPickerItem;

@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: ["./color-picker.component.scss"]
})
@NgModule({
  declarations: [FormGroup, FormBuilder, Validators]
})
export class ColorPickerComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  /* colors */
  colorsUserValueSets: Color[];
  /* */

  /* working with Stepers */
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  /* end Steppers */
  /* working with Dropdown */
  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-3", viewValue: "Tacos" },
    { value: "fries-2", viewValue: "Fries" }
  ];
  /* end Dropdown */
  /* working with settings */

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

  /* end settings */

  userSelectedColorsArray: string[] = [];

  startingColors: string[] = ["#FF3380", "#CCCC00", "#66E64D"];
  /* --- */
  /* assign values */
  userShadeValues: string[] = [];
  // shadesColourOne = this.valueSetting[0].start.shades.colour_1;
  // shadesColourTwo = this.valueSetting[0].start.shades.colour_2;
  // shadesColourThree = this.valueSetting[0].start.shades.colour_3;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [""]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [""]
    });
    console.log(this.valueSetting);
  }

  onSelected($event: string) {
    console.log(":: value selected");
    console.log(this.userSelectedColorsArray);
    console.log({ $event });
    $event === "none" ? null : this.userSelectedColorsArray.push($event);
  }

  // onSelectedShades($event: string) {
  //   console.log('shade index', $event);
  //   $event === "none" ? null : this.userShadeValues.push($event);
  //   console.log(this.shadesColourOne);
  //   console.log(this.shadesColourTwo);
  //   console.log(this.shadesColourThree);
  // }

  onChange() {
    console.log(":: value has changed");
  }

  onClickOut() {
    console.log(":: user clicked out");
  }
  /* */

  /* collection of click functions */
  // Shade Colours
  onSelectedShadesOne($event) {
    // console.log({$event});
    this.valueSetting[0].start.shades.colour_1 = $event;
  }
  onSelectedShadesTwo($event) {
    this.valueSetting[0].start.shades.colour_2 = $event;
    console.log(this.valueSetting);
  }
  onSelectedShadesThree($event) {
    this.valueSetting[0].start.shades.colour_3 = $event;
    console.log(this.valueSetting);
  }
  // Border Colours
  onSelectedBorderOne($event) {
    this.valueSetting[0].start.start_button.border_1_colour = $event;
    console.log(this.valueSetting);
  }
  onSelectedBorderTwo($event) {
    this.valueSetting[0].start.start_button.border_2_colour = $event;
    console.log(this.valueSetting);
  }
  onSelectedBorderThree($event) {
    this.valueSetting[0].start.start_button.border_3_colour = $event;
    console.log(this.valueSetting);
  }
  // Fill Colour
  onSelectedFill($event) {
    this.valueSetting[0].start.start_button.fill_colour = $event;
    console.log(this.valueSetting);
  }
  // Text Colour
  onSelectedText($event) {
    this.valueSetting[0].start.start_button.text_colour = $event;
    console.log(this.valueSetting);
  }
}

// console.log("shades", COLORS[0].start.shades);
// console.log("start button", COLORS[0].start.start_button);
// console.log("pressed", COLORS[0].start.start_button.pressed);
