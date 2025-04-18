import { dataMap } from './Data'
import { GameSettings } from '../types'

export class DataManager {
    static getTasks(settings: GameSettings): string[] {
        const tasks = [...dataMap.generalTask];
        if (settings.extremoMode) {
            tasks.push(...dataMap.extremeTasks);
        }
        if (settings.alcoholMode) {
            tasks.push(...dataMap.alcoholTasks);
        }
        if (settings.minigamesMode) {
            tasks.push(...dataMap.minigameTasks);
        }
        if (settings.masterMode) {
            tasks.push(...dataMap.masterTasks);
        }
        return tasks;
    }

    static getParts(settings: GameSettings): string[] {
        const parts = [...dataMap.generalParts];
        if (settings.extremoMode) {
            parts.push(...dataMap.extremeParts);
        }
        return parts;
    }

    static getSpecificItems(id: keyof typeof dataMap): string[] {
        return [...dataMap[id]];
    }
}