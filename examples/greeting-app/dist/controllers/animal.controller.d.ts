/// <reference types="express" />
import { AnimalService } from '@loopback/example-greeter-extension';
import { Request } from '@loopback/rest';
import { Speaking } from '../types';
export declare class AnimalController {
    private animalService;
    private request;
    constructor(animalService: AnimalService, request: Request);
    animal(gen: string, text: string): Promise<Speaking>;
}
