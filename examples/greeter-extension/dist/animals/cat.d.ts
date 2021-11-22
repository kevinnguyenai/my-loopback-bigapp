import { Animal } from '../types';
/**
 * Options Interface for Cat
 */
export interface CatOptions {
    xre: boolean;
}
/**
 * An Animal implementation for Cat
 */
export declare class Cat implements Animal {
    private options;
    gen: string;
    constructor(options?: CatOptions);
    speak(text: string): string;
}
