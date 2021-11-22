// Node module: @my-loopback-bigapp/example-animals-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import { CachingService } from '../../services/caching-service';
import { CACHING_SERVICE } from '../../keys';

/**
 * This app will bound to application as a LifeCycleObserver during the boots
 */
@lifeCycleObserver('caching')
export class CachingObserver implements LifeCycleObserver {
    private timer: NodeJS.Timer;
    constructor(
        @inject(CACHING_SERVICE)
        private cachingService: CachingService,
    ) {}

    /**
     * this start the caching service
     */
    async start(): Promise<void> {
        await this.cachingService.start();
    }

    /**
     * this stop the caching service
     */
    async stop(): Promise<void> {
        await this.cachingService.stop();
    }   
}