import {config, extensionPoint, extensions, Getter} from '@loopback/core';
import chalk from 'chalk';
import {Animal, ANIMAL_EXTENSION_POINT_NAME} from './types';

/**
 * Interfaces implementation Options for AnimalService
 */
export interface AnimalServiceOptions {
  color: string;
}

/**
 * An ExtensionPoint for animals that can speak by dst obj
 */
@extensionPoint(ANIMAL_EXTENSION_POINT_NAME)
export class AnimalService {
  constructor(
    @extensions()
    private getAnimals: Getter<Animal[]>,

    @config()
    public readonly options?: AnimalServiceOptions,
  ) {}

  /**
   * Finding the animals Object by gen
   * @param gen - type 'cat' or 'dog'
   */
  async findAnimal(gen: string): Promise<Animal | undefined> {
    const animal = await this.getAnimals();
    return animal.find(g => g.gen === gen);
  }

  /**
   * speaking of specific animal
   * @param gen - type 'cat' or 'dog'
   * @param text - name of animal
   */
  async speak(gen: string, text: string): Promise<string> {
    let speaking = '';

    const animal = await this.findAnimal(gen);
    if (animal) {
      speaking = animal.speak(text);
    } else {
      speaking = `Animal not found`;
    }

    if (this.options?.color) {
      speaking = chalk.keyword(this.options.color)(animal);
    }

    return speaking;
  }
}
