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

  constructor() {}
  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-3", viewValue: "Tacos" },
    { value: "fries-2", viewValue: "Fries" }
  ];

  UserSelectedColorsArray: string[] = [];

  startingColors: string[] = [
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
  ];

  ngOnInit() {}

  // event() {
  //   console.log(':: something said');
  // }

  onSelected($event: string) {
    console.log(':: value selected');
    console.log(this.UserSelectedColorsArray);
    console.log({$event});
    this.UserSelectedColorsArray.push($event);
  }

  onChange() {
    console.log(':: value has changed');
  }

  onClickOut() {
    console.log(':: user clicked out');
  }

}
