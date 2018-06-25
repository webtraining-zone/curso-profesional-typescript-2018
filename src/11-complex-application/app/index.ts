import {SignalsCardsComponent} from "./components/signals-cards/signals-cards.component";

class App {

    start() {
        new SignalsCardsComponent({
            selector: '#signals-cards-container'
        }).render();
    }
}

new App().start();