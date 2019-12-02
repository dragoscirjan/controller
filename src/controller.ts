import 'reflect-metadata'
import {RouteRegistry} from '@glasswing/router'

/**
 * Abstract Controller class.
 */
export class AbstractController {
  constructor() {
    if (!Reflect.hasMetadata('routeRegistry', this)) {
      Reflect.defineMetadata('routeRegistry', new RouteRegistry(), this)
    }
  }
}
