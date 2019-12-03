import 'reflect-metadata'
import {Singleton} from '@glasswing/common'
import {ROUTE_REGISTRY_METADATA_NAME, RouteRegistry} from '@glasswing/router'

interface ClassConstructor {
  new(...args: any[]): {}
}

/**
 * @Controller() decorator.
 *
 * @returns {ClassDecorator}
 */
export const Controller = (): any => {
  return <T extends ClassConstructor>(constr:T) => {

    Singleton()
    class extended extends constr {
      constructor(...args: any[]) {
        super(...args)

        if (!Reflect.hasMetadata(ROUTE_REGISTRY_METADATA_NAME, this)) {
          Reflect.defineMetadata(ROUTE_REGISTRY_METADATA_NAME, new RouteRegistry(), this)
        }

      }
    }

    return extended

  }
}
