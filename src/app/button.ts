export class PressedButton {
  public borderOneColour: string;
  public borderTwoColour: string;
  public borderThreeColour: string;
  public fillColour: string;
  public textColour: string;

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

export class Customise {
  public button1: ShadededColour;
  public button2: ShadededColour;
  public button3: ShadededColour;
  public constructor(
    button1?: ShadededColour,
    button2?: ShadededColour,
    button3?: ShadededColour
  ) {
    this.button1 = button1 ? button1 : new ShadededColour();
    this.button2 = button2 ? button2 : new ShadededColour();
    this.button3 = button3 ? button3 : new ShadededColour();
  }
}

export class ShadededColour {
  public colourOne: string = "#914E4E";
  public colourTwo: string = "#214E4E";
  public colourThree: string = "#918E4E";
  public constructor(
    colourOne?: string,
    colourTwo?: string,
    colourThree?: string
  ) {
    this.colourOne = colourOne ? colourOne : this.colourOne;
    this.colourTwo = colourTwo ? colourTwo : this.colourTwo;
    this.colourThree = colourThree ? colourThree: this.colourThree;
  }
}

export class TestingClassesVersionOne {
  constructor(public value: string, public values: string[]) {}
}
