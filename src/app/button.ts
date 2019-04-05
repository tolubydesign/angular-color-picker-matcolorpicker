export class ButtonPressedColours {
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

export class StartingButton extends ButtonPressedColours {
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

export class ShadedColour {
  public colourOne = this.colourOne;
  public colourTwo = this.colourTwo;
  public colourThree = this.colourThree;
  public constructor(
    colourOne?: string,
    colourTwo?: string,
    colourThree?: string
  ) {
    this.colourOne = colourOne ? colourOne : this.colourOne;
    this.colourTwo = colourTwo ? colourTwo : this.colourTwo;
    this.colourThree = colourThree ? colourThree : this.colourThree;
  }
}

export class Colours {
  public borderOneColour = this.borderOneColour;
  public borderTwoColour = this.borderTwoColour;
  public borderThreeColour = this.borderThreeColour;
  public fillColour = this.fillColour;
  public textColour = this.textColour;
  public constructor(
    borderOneColour?: string,
    borderTwoColour?: string,
    borderThreeColour?: string,
    fillColour?: string,
    textColour?: string,
  ) {
    this.borderOneColour = borderOneColour ? borderOneColour : this.borderOneColour;
    this.borderTwoColour = borderTwoColour ? borderTwoColour : this.borderTwoColour;
    this.borderThreeColour = borderThreeColour ? borderThreeColour : this.borderThreeColour;
    this.fillColour = fillColour ? fillColour : this.fillColour;
    this.textColour = textColour ? textColour : this.textColour;
  }
}

export class Customise {
  public button1: ShadedColour;
  public constructor(
    button1?: ShadedColour,
  ) {
    this.button1 = button1 ? button1 : new ShadedColour();
    // produce more buttons (ie button2 & button3) to increase the loop
  }
}

export class Start {
  public startSet: Colours;
  public constructor( startSet?: Colours) {
    this.startSet = startSet ? startSet : new Colours();
  }
}

export class Pressed {
  public pressedSet: Colours;
  public constructor(pressedSet?: Colours) {
    this.pressedSet = pressedSet ? pressedSet : new Colours();
  }
}
