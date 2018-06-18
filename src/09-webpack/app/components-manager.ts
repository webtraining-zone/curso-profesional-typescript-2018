import {OnInitComponent} from "./on-init-component";

export class ComponentsManager {

    components: Array<OnInitComponent> = [];

    addComponent(component: OnInitComponent) {
        this.components.push(component);
    }

    render() {
        this.components.forEach(component => component.onInit());
    }
}