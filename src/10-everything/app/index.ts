import {ExampleComponent} from "./components/example.component";

class App {

    static render() {
        let exampleComponent = new ExampleComponent();

        exampleComponent.renderMinimalBars();
        exampleComponent.renderComplexBars();
    }
}

App.render();