import 'reflect-metadata';
import { ROUTE_REGISTRY_METADATA_NAME, RouteRegistry } from '@glasswing/router';
import { singleton } from 'tsyringe';

/**
 * Abstract Controller class.
 */
var AbstractController = /** @class */ (function () {
    function AbstractController() {
        if (!Reflect.hasMetadata(ROUTE_REGISTRY_METADATA_NAME, this)) {
            Reflect.defineMetadata(ROUTE_REGISTRY_METADATA_NAME, new RouteRegistry(), this);
        }
    }
    return AbstractController;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Comment
 *
 * @returns {ClassDecorator}
 */
var Controller = function () { return function (target) {
    var extended = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            if (!Reflect.hasMetadata(ROUTE_REGISTRY_METADATA_NAME, _this)) {
                Reflect.defineMetadata(ROUTE_REGISTRY_METADATA_NAME, new RouteRegistry(), _this);
            }
            return _this;
        }
        return class_1;
    }(target));
    singleton()(extended);
    return extended;
}; };

export { AbstractController, Controller };
