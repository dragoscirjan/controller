import 'reflect-metadata';
import { ROUTE_REGISTRY_METADATA_NAME, RouteRegistry } from '@glasswing/router';
import { singleton } from 'tsyringe';

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
 * Comment
 *
 * @returns {ClassDecorator}
 */
const Controller = () => (target) => {
    const extended = class extends target {
        constructor(...args) {
            super(...args);
            if (!Reflect.hasMetadata(ROUTE_REGISTRY_METADATA_NAME, this)) {
                Reflect.defineMetadata(ROUTE_REGISTRY_METADATA_NAME, new RouteRegistry(), this);
            }
        }
    };
    singleton()(extended);
    return extended;
};

export { AbstractController, Controller };
