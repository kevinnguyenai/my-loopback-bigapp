// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {BindingTemplate, extensionFor} from '@loopback/core';

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
export const GREETER_EXTENSION_POINT_NAME = 'greeters';

/**
 * Name/id of the animal extension point
 */
export const ANIMAL_EXTENSION_POINT_NAME = 'animals';

/**
 * A binding template for greeter extensions
 */
export const asGreeter: BindingTemplate = binding => {
  extensionFor(GREETER_EXTENSION_POINT_NAME)(binding);
  binding.tag({namespace: 'greeters'});
};

/**
 * A binding template for animal extension
 */
export const asAnimal: BindingTemplate = binding => {
  extensionFor(ANIMAL_EXTENSION_POINT_NAME)(binding);
  binding.tag({namespace: 'animals'});
};
