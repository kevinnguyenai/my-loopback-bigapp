import { BindingKey } from '@loopback/core';
import { GreetingService } from './greeting-service';
import { AnimalService } from './animal-service';
/**
 * Strongly-typed binding key for GreetingService
 */
export declare const GREETING_SERVICE: BindingKey<GreetingService>;
/**
 * Strongly-typed binding key for AnimalService
 */
export declare const ANIMAL_SERVICE: BindingKey<AnimalService>;
