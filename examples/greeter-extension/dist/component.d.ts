import { Binding, Component, LifeCycleObserver } from '@loopback/core';
/**
 * Define a component to register the greeter extension point and built-in
 * extensions
 */
export declare class GreetingComponent implements Component, LifeCycleObserver {
    init(): Promise<void>;
    bindings: Binding[];
}
/**
 * Define a component to register the animal extension point and built-in extensions
 */
export declare class AnimalComponent implements Component, LifeCycleObserver {
    init(): Promise<void>;
    bindings: Binding[];
}
