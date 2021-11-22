import { Application } from '@loopback/core';
export declare class GreetingApplication extends Application {
    constructor();
    main(): Promise<void>;
    getGreetingService(): Promise<import("./greeting-service").GreetingService>;
    getAnimalService(): Promise<import("./animal-service").AnimalService>;
}
