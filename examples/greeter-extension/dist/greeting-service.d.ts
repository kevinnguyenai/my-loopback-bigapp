import { Getter } from '@loopback/core';
import { Greeter } from './types';
/**
 * Options for the greeter extension point
 */
export interface GreetingServiceOptions {
    color: string;
}
/**
 * An extension point for greeters that can greet in different languages
 */
export declare class GreetingService {
    /**
     * Inject a getter function to fetch greeters (bindings tagged with
     * `{[CoreTags.EXTENSION_POINT]: GREETER_EXTENSION_POINT_NAME}`)
     */
    private getGreeters;
    /**
     * An extension point should be able to receive its options via dependency
     * injection.
     */
    readonly options?: GreetingServiceOptions | undefined;
    constructor(
    /**
     * Inject a getter function to fetch greeters (bindings tagged with
     * `{[CoreTags.EXTENSION_POINT]: GREETER_EXTENSION_POINT_NAME}`)
     */
    getGreeters: Getter<Greeter[]>, 
    /**
     * An extension point should be able to receive its options via dependency
     * injection.
     */
    options?: GreetingServiceOptions | undefined);
    /**
     * Find a greeter that can speak the given language
     * @param language - Language code for the greeting
     */
    findGreeter(language: string): Promise<Greeter | undefined>;
    /**
     * Greet in the given language
     * @param language - Language code
     * @param name - Name
     */
    greet(language: string, name: string): Promise<string>;
}
