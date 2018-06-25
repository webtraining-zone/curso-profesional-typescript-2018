import {SignalsService} from "../../services/signals-service";
import {Signal} from "../../models/signal";
import * as template from './signals-cards.component.hbs';
import {BaseComponent} from "../../core/components/base.component";
import {RenderedComponent} from "../../core/components/rendered.component";
import {ComponentConstructorOptions} from "../../core/options/component-constructor-options";
import {ApiConfig} from "../../config/api-config";

export class SignalsCardsComponent extends BaseComponent implements RenderedComponent {

    signals: Array<Signal> = [];

    constructor(options: ComponentConstructorOptions, private _signalsService: SignalsService = new SignalsService()) {
        super(options);
    }

    render() {
        // const template = require('./signals-cards.component.hbs');
        this._signalsService.getSignals().then(response => {
            this.signals = this.preProcessData(response.data.signals);

            super.render({
                data: {signals: this.signals},
                template: template
            })

        });
    }

    preProcessData(signals: Array<Signal>) {
        // http://projects-api.webtraining.zone/traffic-signals-images/sct/

        return signals.map(signal => {
            return {
                filename: signal.filename,
                imageURL: `${ApiConfig.BASE_URL}/traffic-signals-images/sct/${signal.filename}`,
                name: signal.name,
                description: signal.description,
                summary: this.cutString(signal.description)
            }
        });
    }

    cutString(inputString: string, maxLength: number = 255) {
        const MAX_LENGTH_SUMMARY = maxLength;
        const SEPARATOR = ' ';
        if (inputString.length <= MAX_LENGTH_SUMMARY) return inputString;
        return inputString.substr(0, inputString.lastIndexOf(SEPARATOR, MAX_LENGTH_SUMMARY)) + '...';
    }
}