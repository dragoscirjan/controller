import 'reflect-metadata'

import {ROUTE_REGISTRY_METADATA_NAME, RouteRegistry} from '@glasswing/router'

/**
 * Abstract Controller class.
 */
export class AbstractController {
  constructor() {
    if (!Reflect.hasMetadata(ROUTE_REGISTRY_METADATA_NAME, this)) {
      Reflect.defineMetadata(ROUTE_REGISTRY_METADATA_NAME, new RouteRegistry(), this)
    }
  }
}
