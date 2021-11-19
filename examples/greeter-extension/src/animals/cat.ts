import {config, injectable} from '@loopback/core';
import {asAnimal, Animal} from '../types';

/**
 * Options Interface for Cat
 */
export interface CatOptions {
  xre: boolean;
}

/**
 * An Animal implementation for Cat
 */
@injectable(asAnimal)
export class Cat implements Animal {
  gen = 'cat';

  constructor(
    @config()
    private options: CatOptions = {xre: false},
  ) {}

  speak(text: string) {
    if (this.options?.xre === true) {
      return `Cat ${text} xre xre`;
    } else {
      return `Cat ${text} meow meow`;
    }
  }
}
