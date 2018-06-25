import {SignalsCardsComponent} from "./components/signals-cards/signals-cards.component";

class App {

    render() {
        new SignalsCardsComponent({
            selector: '#signals-cards-container'
        }).render();
    }
}

new App().render();