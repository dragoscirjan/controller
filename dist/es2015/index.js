import 'reflect-metadata';
import { ROUTE_REGISTRY_METADATA_NAME, RouteRegistry } from '@glasswing/router';
import { Singleton } from '@glasswing/common';

/**
 * Abstract Controller class.
 */
class AbstractController {
    constructor() {
        if (!Reflect.hasMetadata(ROUTE_REGISTRY_METADATA_NAME, this)) {
            Reflect.defineMetadata(ROUTE_REGISTRY_METADATA_NAME, new RouteRegistry(), this);
        }
    }
}

/**
 * @Controller() decorator.
 *
 * @returns {ClassDecorator}
 */
const Controller = () => (target) => {
    class Extended extends target {
        constructor(...args) {
            super(...args);
            if (!Reflect.hasMetadata(ROUTE_REGISTRY_METADATA_NAME, this)) {
                Reflect.defineMetadata(ROUTE_REGISTRY_METADATA_NAME, new RouteRegistry(), this);
            }
        }
    }
    Singleton()(Extended);
    return Extended;
};

export { AbstractController, Controller };
