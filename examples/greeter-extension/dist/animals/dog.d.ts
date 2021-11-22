import { Animal } from '../types';
/**
 * Options for Dog Class
 */
export interface DogOptions {
    gru: boolean;
}
/**
 * A Animal implementation for Dog
 */
export declare class Dog implements Animal {
    private options;
    gen: string;
    constructor(options?: DogOptions);
    speak(text: string): string;
}
