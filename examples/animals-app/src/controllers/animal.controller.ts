// Node module: @my-loopback-bigapp/example-animals-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { inject } from '@loopback/core';
import {AnimalService, ANIMAL_SERVICE} from '@my-loopback-bigapp/example-greeter-extension';
import {get, param, Request, RestBindings} from '@loopback/rest';
import {Speaking} from '../types';


export class AnimalController {
    constructor(
        @inject(ANIMAL_SERVICE)
        private animalService: AnimalService,
        @inject(RestBindings.Http.REQUEST) 
        private request: Request,
    ){}

    @get('/animal/{gen}/{language}',{
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                timestamp: 'string',
                                gen: 'string',
                                language: 'string',
                            },
                        },
                    },
                },
            },
        },
    })
    async animal(
        @param.path.string('gen') gen: string,
        @param.path.string('language') language: string,
    ): Promise<Speaking> {
        const animal = await this.animalService.speak(gen, language);
        return {
            timestamp: new Date(),
            gen,
            animal,
        };
    }
}