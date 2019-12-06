import 'reflect-metadata'

import {Singleton} from '@glasswing/common'
import {ROUTE_REGISTRY_METADATA_NAME, RouteRegistry} from '@glasswing/router'

/**
 * Comment
 *
 * @returns {ClassDecorator}
 */
export const Controller = (): any => <T extends new (...args: any[]) => {}>(target: T): T => {
  const extended = class extends target {
    constructor(...args: any[]) {
      super(...args)
      if (!Reflect.hasMetadata(ROUTE_REGISTRY_METADATA_NAME, this)) {
        Reflect.defineMetadata(ROUTE_REGISTRY_METADATA_NAME, new RouteRegistry(), this)
      }
    }
  }
  Singleton()(extended)
  return extended
}
