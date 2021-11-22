// Node module: @my-loopback-bigapp/example-animals-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT


// Animal Inteface
export interface Speaking {
    timestamp: Date;
    gen: string;
    animal: string;
}

// Msg Interface for caching
export interface Msg {
    timestamp: Date;
    message: string;
}