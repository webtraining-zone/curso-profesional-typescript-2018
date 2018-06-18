(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentsManager = /** @class */ (function () {
        function ComponentsManager() {
            this.components = [];
        }
        ComponentsManager.prototype.addComponent = function (component) {
            this.components.push(component);
        };
        ComponentsManager.prototype.render = function () {
            this.components.forEach(function (component) { return component.onInit(); });
        };
        return ComponentsManager;
    }());
    exports.ComponentsManager = ComponentsManager;
});
