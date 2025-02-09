export const API_URL = "https://api.example.com";
export const APP_NAME = "Twist You";
export const MAX_PLAYERS = 16;
export type GameSettings = {
  alcoholMode: boolean;
  extremoMode: boolean;
  minigamesMode: boolean;
};
export type Page = "main" | "game" | "players" | "settings";