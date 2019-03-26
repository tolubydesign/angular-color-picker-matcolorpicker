// export class ButtonStyling {
//   public borderOneColour: string;
//   public borderTwoColour: string;
//   public borderThreeColour: string;
//   public fillColour: string;
//   public textColour: string;
//   public pressed?: {
//     border_1_colour: string;
//     border_2_colour: string;
//     border_3_colour: string;
//     fill_colour: string;
//     text_colour: string;
//   };
//   public constructor(value: string) {
//     this.borderOneColour = value;
//     this.borderTwoColour = value;
//     this.borderThreeColour = value;
//     this.fillColour = value;
//     this.textColour = value;
//   }
// }

export class PressedButton {
  public borderOneColour: string;
  public borderTwoColour: string;
  public borderThreeColour: string;
  public fillColour: string;
  public textColour: string;
  /* */
  public constructor(
    borderOneColour?: string,
    borderTwoColour?: string,
    borderThreeColour?: string,
    fillColour?: string,
    textColour?: string
  ) {
    this.borderOneColour = borderOneColour;
    this.borderTwoColour = borderTwoColour;
    this.borderThreeColour = borderThreeColour;
    this.fillColour = fillColour;
    this.textColour = textColour;
  }
}

export class StartingButton extends PressedButton {
  public constructor(
    borderOneColour?: string,
    borderTwoColour?: string,
    borderThreeColour?: string,
    fillColour?: string,
    textColour?: string
  ) {
    super(
      borderOneColour,
      borderTwoColour,
      borderThreeColour,
      fillColour,
      textColour
    );
  }
}

export class TestingClassesVersionOne {
  constructor(public value: string, public values: string[]) {}
}
