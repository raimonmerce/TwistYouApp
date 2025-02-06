
const maxDrinks = 3;

type Options = {
    checkAlcohol?: boolean;
    checkExtreme?: boolean;
};

type Translations = {
    generalTasks : string[],
    alcoholTasks : string[],
    extremeTasks : string[],
    generalParts : string[],
    extremeParts : string[],
    basicTask: string,
    of: string
};

export default class Turn {
  private players: string[];
  private generalTasks: string[];
  private alcoholTasks: string[];
  private extremeTasks: string[];
  //private minigameTasks: string[];
  //private colorTasks: string[];
  private generalParts: string[];
  private extremeParts: string[];
  private tasks: string[];
  private parts: string[];
  private basicTask: string;
  private of: string;

  constructor(options: Options, players: string[], translations: Translations) {
    this.players = players;

    this.basicTask = translations.basicTask;
    this.of = translations.of;

    this.generalTasks = translations.generalTasks;
    this.alcoholTasks = translations.alcoholTasks;
    this.extremeTasks = translations.extremeTasks;
    this.generalParts = translations.generalParts;
    this.extremeParts = translations.extremeParts;
    
    this.tasks = [...this.generalTasks];
    this.parts = [...this.generalParts];

    if (options.checkAlcohol) {
      this.tasks = [...this.tasks, ...this.alcoholTasks];
    }

    if (options.checkExtreme) {
      this.tasks = [...this.tasks, ...this.extremeTasks];
      this.parts = [...this.parts, ...this.extremeParts];
    }
  }

  private getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private getRandomPart(): string {
    return this.getRandomElement(this.parts);
  }

  private getRandomExtremePart(): string {
    return this.getRandomElement(this.extremeParts);
  }

  private getRandomPlayer(): string {
    return this.getRandomElement(this.players);
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * (maxDrinks - 1)) + 2;
  }

  private getFullSentence(text: string, player: string): string {
    return text
      .replace("$num", this.getRandomNumber().toString())
      .replace("$selfPlayer", player)
      .replace("$otherPlayer", this.getRandomPlayer())
      .replace("$part", this.getRandomPart())
      .replace("$part2", this.getRandomPart())
      .replace("$extremePart", this.getRandomExtremePart());
  }

  generateText(player: string): string {
    const probability = Math.random();
    let text;
    if (probability < 0.5) {
        text = `${this.basicTask} ${this.of}`;
    } else {
        text = this.getRandomElement(this.tasks);
    }

    if (Array.isArray(text)) {
      text = this.getRandomElement(text);
    }

    return this.capitalizeFirstLetter(this.getFullSentence(text, player));
  }
}
