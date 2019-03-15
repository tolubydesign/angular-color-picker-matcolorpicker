// tslint:disable: quotemark
import { Component, OnInit, NgModule } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgModel } from "@angular/forms";
import { COLORS } from '../mock-data';
import { Color } from '../ColorsClass';


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
  declarations: [
    FormGroup,
    FormBuilder,
    Validators,
  ],
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

  userSelectedColorsArray: string[] = [];

  startingColors: string[] = ["#FF3380", "#CCCC00", "#66E64D"];
  /* --- */
  /* assign values */
  userShadeValues: string[] = [];
  

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
  }

  onSelected($event: string) {
    console.log(":: value selected");
    console.log(this.userSelectedColorsArray);
    console.log({ $event });
    $event === "none" ? null : this.userSelectedColorsArray.push($event);
  }

  onSelectedShades($event: string) {
    console.log('shade index', $event);
    $event === "none" ? null : this.userShadeValues.push($event);
  }

  onChange() {
    console.log(":: value has changed");
  }

  onClickOut() {
    console.log(":: user clicked out");
  }
  /* */



}

console.log('shades', COLORS[0].start.shades);
console.log('start button', COLORS[0].start.start_button);
console.log('pressed', COLORS[0].start.start_button.pressed);
