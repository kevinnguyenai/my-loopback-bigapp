import { BindingTemplate } from '@loopback/core';
/**
 * Typically an extension point defines an interface as the contract for
 * extensions to implement Greeter
 */
export interface Greeter {
    language: string;
    greet(name: string): string;
}
/**
 * Typically an extension point defines an interface as the contract for
 * extensions to implement Animals
 */
export interface Animal {
    gen: string;
    speak(text: string): string;
}
/**
 * Name/id of the greeter extension point
 */
export declare const GREETER_EXTENSION_POINT_NAME = "greeters";
/**
 * Name/id of the animal extension point
 */
export declare const ANIMAL_EXTENSION_POINT_NAME = "animals";
/**
 * A binding template for greeter extensions
 */
export declare const asGreeter: BindingTemplate;
/**
 * A binding template for animal extension
 */
export declare const asAnimal: BindingTemplate;
