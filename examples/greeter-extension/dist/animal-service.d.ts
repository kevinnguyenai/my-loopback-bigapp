import { Getter } from '@loopback/core';
import { Animal } from './types';
/**
 * Interfaces implementation Options for AnimalService
 */
export interface AnimalServiceOptions {
    color: string;
}
/**
 * An ExtensionPoint for animals that can speak by dst obj
 */
export declare class AnimalService {
    private getAnimals;
    readonly options?: AnimalServiceOptions | undefined;
    constructor(getAnimals: Getter<Animal[]>, options?: AnimalServiceOptions | undefined);
    /**
     * Finding the animals Object by gen
     * @param gen - type 'cat' or 'dog'
     */
    findAnimal(gen: string): Promise<Animal | undefined>;
    /**
     * speaking of specific animal
     * @param gen - type 'cat' or 'dog'
     * @param text - name of animal
     */
    speak(gen: string, text: string): Promise<string>;
}
