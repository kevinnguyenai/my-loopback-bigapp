import { BindingKey } from '@loopback/core';
import { CachingService } from './services/caching-service';

/**
 * Strongly-typed binding key for CachingService
 */
export const CACHING_SERVICE = BindingKey.create<CachingService>(
    'services.CachingService'
)