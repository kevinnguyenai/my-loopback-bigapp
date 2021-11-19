import {inject} from '@loopback/core';
import {
  AnimalService,
  ANIMAL_SERVICE,
} from '@loopback/example-greeter-extension';
import {get, param, Request, RestBindings} from '@loopback/rest';
import {Speaking} from '../types';

export class AnimalController {
  constructor(
    @inject(ANIMAL_SERVICE) private animalService: AnimalService,
    @inject(RestBindings.Http.REQUEST) private request: Request,
  ) {}

  @get('/animal/{gen}/{text}', {
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
                text: 'string',
              },
            },
          },
        },
      },
    },
  })
  async animal(
    @param.path.string('gen') gen: string,
    @param.path.string('text') text: string,
  ): Promise<Speaking> {
    const animal = await this.animalService.speak(gen, text);
    return {
      timestamp: new Date(),
      gen,
      animal,
    };
  }
}
