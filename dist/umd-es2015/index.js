(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('reflect-metadata'), require('@glasswing/router'), require('@glasswing/common')) :
  typeof define === 'function' && define.amd ? define(['exports', 'reflect-metadata', '@glasswing/router', '@glasswing/common'], factory) :
  (global = global || self, factory((global.gw = global.gw || {}, global.gw.common = {}), null, global.router, global.common));
}(this, (function (exports, reflectMetadata, router, common) { 'use strict';

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
      common.Singleton()(extended);
      return extended;
  };

  exports.AbstractController = AbstractController;
  exports.Controller = Controller;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
