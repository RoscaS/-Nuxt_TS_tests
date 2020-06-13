export class Vote {
  public constructor(
    public id: number,
    public choiceId: number,
    public comment?: string
  ) {}
}

export class Choice {
  public count: number;

  public constructor(
    public id: number,
    public pollId: number,
    public text: string
  ) {
    this.count = 0;
  }
}

export class Poll {
  public choices: Choice[];

  public constructor(
    public id: number,
    public topic: string,
    choices?: Choice[]
  ) {
    this.choices = choices !== undefined ? choices : [];
  }
}

export interface ChoiceVote {
  choiceId: number;
  comment?: string;
}
