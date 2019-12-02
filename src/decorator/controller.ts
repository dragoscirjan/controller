import 'reflect-metadata'
import {RouteRegistry} from '@glasswing/router'

/**
 * @Controller() decorator.
 *
 * @returns {ClassDecorator}
 */
export function Controller(): ClassDecorator {
  return (target: any): void => {
    if (!Reflect.hasMetadata('routeRegistry', target)) {
      Reflect.defineMetadata('routeRegistry', new RouteRegistry(), target)
    }

    Singleton()(target)
  }
}
