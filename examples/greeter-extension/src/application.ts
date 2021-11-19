// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Application} from '@loopback/core';
import {GreetingComponent} from './component';
import {GREETING_SERVICE} from './keys';
import {AnimalComponent} from './component';
import {ANIMAL_SERVICE} from './keys';

export class GreetingApplication extends Application {
  constructor() {
    super();
    this.component(GreetingComponent);
    this.component(AnimalComponent);
  }

  async main() {
    // Greet Extensions
    const greetingService = await this.getGreetingService();
    let msg = await greetingService.greet('en', 'Raymond');
    console.log('English:', msg);
    msg = await greetingService.greet('zh', 'Raymond');
    console.log('Chinese:', msg);
    // Animal Extensions
    const animalService = await this.getAnimalService();
    msg = await animalService.speak('dog', 'Speen');
    console.log(msg);
    msg = await animalService.speak('cat', 'Boro');
    console.log(msg);
  }

  async getGreetingService() {
    return this.get(GREETING_SERVICE);
  }

  async getAnimalService() {
    return this.get(ANIMAL_SERVICE);
  }
}
