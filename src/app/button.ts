export class ButtonStyling {
  public StartButton: {
    border_1_colour: string;
    border_2_colour: string;
    border_3_colour: string;
    fill_colour: string;
    text_colour: string;
  };
  constructor(public value: string[], public colourValues: string[]) {
    this.StartButton[0] = value;
    this.StartButton[1] = value;
    this.StartButton[2] = value;
    // this.StartButton.border_1_colour = value;
    // this.StartButton.border_2_colour = value;
    // this.StartButton.border_3_colour = value;
  }
}

export class Pressed extends ButtonStyling {
  constructor() {
    super(['Pressed'], ["#fff", "#ececec"]);
    // super("Pressed", ["#fff", "#ececec"]);
  }
}

export class TestingClassesVersionOne {
  constructor(public value: string, public values: string[]) {}
}
