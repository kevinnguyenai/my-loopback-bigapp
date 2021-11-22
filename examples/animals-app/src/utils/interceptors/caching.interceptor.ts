// Node module: @my-loopback-bigapp/example-animals-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {
    injectable, 
    inject, 
    asGlobalInterceptor, 
    Interceptor,
    InvocationContext,
    InvocationResult,
    Provider,
    ValueOrPromise
} from '@loopback/core'
import { RestBindings } from '@loopback/rest';
import debugFactory from 'debug';
import { CachingService } from '../../services/caching-service';
import { CACHING_SERVICE } from '../../keys';

const debug = debugFactory('animals-app');

@injectable(asGlobalInterceptor('caching'))
export class CachingInterceptor implements Provider<Interceptor> {
    constructor(
        @inject(CACHING_SERVICE)
        private cachingService: CachingService,
    ){}

    value() {
        return async (
            ctx: InvocationContext,
            next: () => ValueOrPromise<InvocationResult>,
        ) => {
            const httpRequest = await ctx.get(RestBindings.Http.REQUEST, {
                optional: true,
            });
            if(!httpRequest) {
                return next();
            }
            const key = httpRequest.path;
            const arrkey  = key.split('/');
            let result;
            if(arrkey.length===3){
                const cachingKey = `${arrkey[1]}:${arrkey[2]}`;
                const cachingResult = await this.cachingService.get(cachingKey);
                if(cachingResult) {
                    debug('cache found for %s %j',cachingKey, cachingResult);
                    return cachingResult;

                }
                result = await next();
                await this.cachingService.set(cachingKey, result);
                return result;
            } else {
                result = await next();
                return result;
            }

        }
    }
}