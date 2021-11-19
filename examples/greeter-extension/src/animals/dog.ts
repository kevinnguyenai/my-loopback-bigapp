import {config, injectable} from '@loopback/core';
import {asAnimal, Animal} from '../types';

/**
 * Options for Dog Class
 */
export interface DogOptions {
  gru: boolean;
}

/**
 * A Animal implementation for Dog
 */
@injectable(asAnimal)
export class Dog implements Animal {
  gen = 'dog';

  constructor(
    @config()
    private options: DogOptions = {gru: false},
  ) {}

  speak(text: string) {
    if (this.options?.gru === true) {
      return `Dog speak: ${text} gru gru !`;
    } else {
      return `Dog speak: ${text} wow wow !`;
    }
  }
}
