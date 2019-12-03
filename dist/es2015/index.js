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
const Controller = () => {
    return (constr) => {
        Singleton();
        class Extended extends constr {
            constructor(...args) {
                super(...args);
                if (!Reflect.hasMetadata(ROUTE_REGISTRY_METADATA_NAME, this)) {
                    Reflect.defineMetadata(ROUTE_REGISTRY_METADATA_NAME, new RouteRegistry(), this);
                }
            }
        }
        return Extended;
    };
};

export { AbstractController, Controller };
