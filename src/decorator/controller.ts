import 'reflect-metadata'

import {Singleton} from '@glasswing/common'
import {ROUTE_REGISTRY_METADATA_NAME, RouteRegistry} from '@glasswing/router'
import constructor from 'tsyringe'

/**
 * @Controller() decorator.
 *
 * @returns {ClassDecorator}
 */
export const Controller = (): ClassDecorator => (target: any): any => {
  class Extended extends target {
    constructor(...args: any[]) {
      super(...args)

      if (!Reflect.hasMetadata(ROUTE_REGISTRY_METADATA_NAME, this)) {
        Reflect.defineMetadata(ROUTE_REGISTRY_METADATA_NAME, new RouteRegistry(), this)
      }
    }
  }
  Singleton()(Extended)
  return Extended
}
