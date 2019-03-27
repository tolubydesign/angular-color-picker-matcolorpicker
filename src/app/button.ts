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

export class Customise {
  public button1: ShadededColour;
  public constructor(
    button1?: ShadededColour,
  ) {
    this.button1 = button1 ? button1 : new ShadededColour();
    // produce more buttons (ie button2 & button3) to increase the loop
  }
}

export class ShadededColour {
  public colourOne = '#914E4E';
  public colourTwo = '#214E4E';
  public colourThree = '#918E4E';
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
