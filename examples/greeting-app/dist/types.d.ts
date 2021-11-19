/**
 * Greeting message response
 */
export interface Message {
    timestamp: Date;
    language: string;
    greeting: string;
}
export interface Speaking {
    timestamp: Date;
    gen: string;
    animal: string;
}
