import { GameSettings } from "../../types";
import { MAX_DRINKS } from "../../constants";
import { DataManager } from "../../data/DataManager";

type TranslateFunction = (key: string, options?: any) => string;

export default class Turn {
  private players: string[];
  private tasks: string[];
  private parts: string[];
  private basicTask: string;
  private of: string;
  private t: TranslateFunction;

  constructor(settings: GameSettings, players: string[], t: TranslateFunction) {
    this.players = players;
    this.t = t;
    this.basicTask = "game.basicTask";
    this.of = "game.of";
    
    this.tasks = DataManager.getTasks(settings);
    this.parts = DataManager.getParts(settings);
    console.log("tasks", this.tasks)
    console.log("parts", this.parts)
  }

  private getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private getRandomPart(): string {
    return this.getRandomElement(this.parts);
  }

  private getRandomExtremePart(): string {
    return this.getRandomElement(DataManager.getSpecificItems('extremeParts'));
  }

  private getRandomPlayer(): string {
    return this.getRandomElement(this.players);
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * (MAX_DRINKS - 1)) + 2;
  }

  private getFullSentence(text: string, player: string): string {
    const translatedText = this.t(text);
  
    return translatedText
      .replace("$num", this.getRandomNumber().toString())
      .replace("$selfPlayer", player)
      .replace("$otherPlayer", this.getRandomPlayer())
      .replace("$part", this.t(this.getRandomPart()))
      .replace("$part2", this.t(this.getRandomPart()))
      .replace("$extremePart", this.t(this.getRandomExtremePart()));
  }

  generateText(player: string): string {
    const isBasic = Math.random() < 0.5;
  
    const text = isBasic
      ? `${this.t(this.basicTask)} ${this.t(this.of)}`
      : this.getRandomElement(this.tasks);
  
    return this.capitalizeFirstLetter(this.getFullSentence(text, player));
  }
}
