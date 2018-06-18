var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.onInit = function () {
        console.log('>> LoginComponent > onInit');
    };
    return LoginComponent;
}());
var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.onInit = function () {
        console.log('>> CardsComponent > onInit');
    };
    return CardsComponent;
}());
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
var manager = new ComponentsManager();
manager.addComponent(new LoginComponent());
manager.addComponent(new CardsComponent());
manager.render();
