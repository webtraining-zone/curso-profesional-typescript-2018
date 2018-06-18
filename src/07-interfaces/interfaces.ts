interface OnInitComponent {
    onInit(): void;
}

class LoginComponent implements OnInitComponent {
    onInit(): void {
        console.log('>> LoginComponent > onInit');
    }
}

class CardsComponent implements OnInitComponent {
    onInit(): void {
        console.log('>> CardsComponent > onInit');
    }

}

class ComponentsManager {

    components: Array<OnInitComponent> = [];

    addComponent(component: OnInitComponent) {
        this.components.push(component);
    }

    render() {
        this.components.forEach(component => component.onInit());
    }
}

let manager = new ComponentsManager();
manager.addComponent(new LoginComponent());
manager.addComponent(new CardsComponent());
manager.render();