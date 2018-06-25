import {SignalsCardsComponent} from "./components/signals-cards/signals-cards.component";

class App {

    render() {
        new SignalsCardsComponent().render();
    }
}

new App().render();