(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./cards-component", "./login-component", "./components-manager"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cards_component_1 = require("./cards-component");
    var login_component_1 = require("./login-component");
    var components_manager_1 = require("./components-manager");
    var manager = new components_manager_1.ComponentsManager();
    manager.addComponent(new login_component_1.LoginComponent());
    manager.addComponent(new cards_component_1.CardsComponent());
    manager.render();
});
