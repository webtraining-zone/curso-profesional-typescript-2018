import {SignalsService} from "../../services/signals-service";
import {Signal} from "../../models/signal";

export class SignalsCardsComponent {

    signals: Array<Signal> = [];

    constructor(private _signalsService: SignalsService = new SignalsService()) {

    }

    render() {
        this._signalsService.getSignals().then(response => {
            this.signals = response.data.signals;
            console.log(this.signals);
        });
    }

}