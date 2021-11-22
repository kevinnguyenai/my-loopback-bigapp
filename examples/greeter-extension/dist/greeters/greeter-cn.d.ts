import { Greeter } from '../types';
/**
 * Options for the Chinese greeter
 */
export interface ChineseGreeterOptions {
    nameFirst: boolean;
}
/**
 * A greeter implementation for Chinese.
 */
export declare class ChineseGreeter implements Greeter {
    /**
     * Inject the configuration for ChineseGreeter
     */
    private options;
    language: string;
    constructor(
    /**
     * Inject the configuration for ChineseGreeter
     */
    options?: ChineseGreeterOptions);
    greet(name: string): string;
}
