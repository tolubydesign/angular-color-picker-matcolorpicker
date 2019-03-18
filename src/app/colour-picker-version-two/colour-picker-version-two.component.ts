// tslint:disable: quotemark
import { Component, OnInit, NgModule } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgModel } from "@angular/forms";
// import { COLORS } from "../mock-data";
import { Color } from "../ColorsClass";

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
  }

  onChange() {
    console.log(':: 2', ":: value has changed");
  }

  onClickOut() {
    console.log(':: 2', ":: user clicked out");
  }
  /* */

  /* collection of click functions */

  // Shade Colours
  onSelectedShadesOne($event) {
    $event === "none"
      ? null
      : (this.valueSetting[0].start.shades.colour_1 = $event);
    console.log(":: 2", this.valueSetting);
  }
  onSelectedShadesTwo($event) {
    this.valueSetting[0].start.shades.colour_2 = $event;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedShadesThree($event) {
    this.valueSetting[0].start.shades.colour_3 = $event;
    console.log(":: 2", this.valueSetting);
  }

  // Border Colours
  onSelectedStartBorderOne($event) {
    this.valueSetting[0].start.start_button.border_1_colour = $event;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedStartBorderTwo($event) {
    this.valueSetting[0].start.start_button.border_2_colour = $event;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedStartBorderThree($event) {
    this.valueSetting[0].start.start_button.border_3_colour = $event;
    console.log(":: 2", this.valueSetting);
  }

  // Fill Colour
  onSelectedStartFill($event) {
    this.valueSetting[0].start.start_button.fill_colour = $event;
    console.log(":: 2", this.valueSetting);
  }

  // Text Colour
  onSelectedStartText($event) {
    this.valueSetting[0].start.start_button.text_colour = $event;
    console.log(":: 2", this.valueSetting);
  }

  // Pressed Colours
  onSelectedPressedBorderOne($event) {
    this.valueSetting[0].start.start_button.pressed.border_1_colour = $event;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedPressedBorderTwo($event) {
    this.valueSetting[0].start.start_button.pressed.border_2_colour = $event;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedPressedBorderThree($event) {
    this.valueSetting[0].start.start_button.pressed.border_3_colour = $event;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedPressedFill($event) {
    this.valueSetting[0].start.start_button.pressed.fill_colour = $event;
    console.log(":: 2", this.valueSetting);
  }
  onSelectedPressedText($event) {
    this.valueSetting[0].start.start_button.pressed.text_colour = $event;
    console.log(":: 2", this.valueSetting);
  }

  // saving colours
  onSave() {
    this.valueSetting;
  }
}
