// Node module: @my-loopback-bigapp/example-animals-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {injectable, BindingScope, config, ContextView} from '@loopback/core';
import debugFactory from 'debug';
import { Msg } from '../types';

const debug = debugFactory('animals-app');

/**
 * Configuration for caching service
 */
export interface CachingServiceOptions {
    // the time-to-live of Msg on cache
    ttl: number;
}

@injectable({scope: BindingScope.SINGLETON})
export class CachingService {
    // Varialbe
    private timer: NodeJS.Timer;
    private store: Map<string, Msg> = new Map();

    // Constructor object
    constructor(
        @config.view()
        private optionsView: ContextView<CachingServiceOptions>,
    ) {
        optionsView.on('refresh', () => {
            debug('Restart the service as configuration changed');
            
        })
    }

    /**
     * Set Msg to cache
     * @param key will be store
     * @param msg will be store
     */
    async set(key: string, msg: Msg) {
        this.store.set(key, msg);
    }

    /**
     * Get Msg from cache
     * @param key will be get if not expired
     */
    async get(key: string) {
        const expired = await this.isExpired(key);
        debug('Getting cache for %s ', key, expired);
        return expired ? undefined : this.store.get(key);
    }

    /**
     * Delete Msg from cache
     * @param key will be deleted
     */
    async delete(key: string) {
        this.store.delete(key);
    }

    /**
     * Clear all Msg in cache
     */
    async clear() {
        this.store.clear();
    }

    /**
     * Check if items is expired by key
     * @param key will be check for expired
     * @param now is the current DateTime
     */
    async isExpired(key: string, now = new Date()): Promise<boolean> {
        const ttl = await this.getTTL();
        const msg = this.store.get(key);
        if(!msg) return true;
        return now.getTime() - msg.timestamp.getTime() > ttl;
    }

    /**
     * get TTL of Msg in cache
     */
    async getTTL(): Promise<number> {
        const option = await this.optionsView.singleValue();
        debug('Caching options is %j', option);
        return option?.ttl ?? 5000;
    }
    /**
     * Remove expired item out of cache
     */
    async sweep() {
        debug('Remove expired item from cache');
        for(const key of this.store.keys()) {
            if(await this.isExpired(key)) {
                debug('Cache for %s is swepted', key);
                await this.delete(key);
            }
        }
    }

    /**
     * this method invoke when app start
     */
    async start(): Promise<void> {
        debug('Starting caching service');
        await this.clear();
        const ttl = await this.getTTL();
        debug('TTL: %d', ttl);
        this.timer = setInterval(() => {
            this.sweep().catch(console.warn);
        }, ttl);
    }

    /**
     * this method invoke when app stop
     */
    async stop(): Promise<void> {
        debug('Stopping caching service');
        if(this.timer) {
            clearInterval(this.timer);
        }
        await this.clear();
    }

    /**
     * this method call by refresh event to restart service
     */
    async restart(): Promise<void> {
        await this.stop();
        await this.start();
    }
}
