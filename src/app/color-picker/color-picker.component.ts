// tslint:disable: quotemark
import { Component, OnInit } from "@angular/core";


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
export class ColorPickerComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

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

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSelected($event: string, index) {
    console.log(":: value selected");
    console.log(this.userSelectedColorsArray);
    console.log({ $event });
    console.log({ index });
    const userSelectedColorValue =
      $event === "none" ? null : this.userSelectedColorsArray.push($event);
  }

  onChange() {
    console.log(":: value has changed");
  }

  onClickOut() {
    console.log(":: user clicked out");
  }
  /* */



}
