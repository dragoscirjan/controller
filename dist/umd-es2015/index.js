(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('reflect-metadata'), require('@glasswing/router'), require('tsyringe')) :
  typeof define === 'function' && define.amd ? define(['exports', 'reflect-metadata', '@glasswing/router', 'tsyringe'], factory) :
  (global = global || self, factory((global.gw = global.gw || {}, global.gw.common = {}), null, global.router, global.tsyringe));
}(this, (function (exports, reflectMetadata, router, tsyringe) { 'use strict';

  /**
   * Abstract Controller class.
   */
  class AbstractController {
      constructor() {
          if (!Reflect.hasMetadata(router.ROUTE_REGISTRY_METADATA_NAME, this)) {
              Reflect.defineMetadata(router.ROUTE_REGISTRY_METADATA_NAME, new router.RouteRegistry(), this);
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
              if (!Reflect.hasMetadata(router.ROUTE_REGISTRY_METADATA_NAME, this)) {
                  Reflect.defineMetadata(router.ROUTE_REGISTRY_METADATA_NAME, new router.RouteRegistry(), this);
              }
          }
      };
      tsyringe.singleton()(extended);
      return extended;
  };

  exports.AbstractController = AbstractController;
  exports.Controller = Controller;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
