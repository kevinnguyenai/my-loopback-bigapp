// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {BindingKey} from '@loopback/core';
import {GreetingService} from './greeting-service';
import {AnimalService} from './animal-service';

/**
 * Strongly-typed binding key for GreetingService
 */
export const GREETING_SERVICE = BindingKey.create<GreetingService>(
  'services.GreetingService',
);

/**
 * Strongly-typed binding key for AnimalService
 */
export const ANIMAL_SERVICE = BindingKey.create<AnimalService>(
  'services.AnimalService',
);
