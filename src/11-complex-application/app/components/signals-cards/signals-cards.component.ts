import {SignalsService} from "../../services/signals-service";
import {Signal} from "../../models/signal";
import * as template from './signals-cards.component.hbs';
import {BaseComponent} from "../../core/components/base.component";
import {RenderedComponent} from "../../core/components/rendered.component";
import {ComponentConstructorOptions} from "../../core/options/component-constructor-options";
import {ApiConfig} from "../../config/api-config";
import {StringUtils} from "../../utils/string-utils";
import {SignalType} from "../../models/signal-type";

export class SignalsCardsComponent extends BaseComponent implements RenderedComponent {

    signals: Array<Signal> = [];
    signalTypes: Array<SignalType> = [];

    constructor(options: ComponentConstructorOptions, private _signalsService: SignalsService = new SignalsService()) {
        super(options);
    }

    render() {
        // const template = require('./signals-cards.component.hbs');
        this._signalsService.getSignals().then(response => {
            this.signals = this.transformSignalsData(response.data.signals);
            this.signalTypes = this.extractSignalTypes(response.data.signals);

            this.applyRenderFromParentComponent(this.signals, this.signalTypes);
            this.applyUIEvents();
        });
    }

    applyRenderFromParentComponent(signals: Array<Signal>, signalTypes: Array<SignalType>) {
        super.render({
            data: {
                signals: signals,
                signalTypes: signalTypes
            },
            template: template
        });
    }

    isSignalTypeItemInArray(item: SignalType, array: Array<SignalType>): boolean {
        return array.filter(type => type.name === item.name).length > 0;
    }

    extractSignalTypes(signals: Array<Signal>) {
        const signalTypes: Array<SignalType> = [];

        signals.forEach(signal => {
            if (!this.isSignalTypeItemInArray(signal.type, signalTypes)) {
                signalTypes.push(signal.type);
            }
        });

        return signalTypes;
    }

    transformSignalsData(signals: Array<Signal>) {
        // http://projects-api.webtraining.zone/traffic-signals-images/sct/

        return signals.map(signal => {
            return {
                filename: signal.filename,
                imageURL: `${ApiConfig.BASE_URL}/traffic-signals-images/sct/${signal.filename}`,
                name: signal.name,
                description: signal.description,
                summary: StringUtils.cutString(signal.description),
                type: signal.type
            }
        });
    }

    applyUIEvents() {
        // Events for filtering
        const $select = document.querySelector("#signalTypes") as HTMLSelectElement;

        $select.onchange = (event: Event) => {
            // 1) Get the selected value
            const selectedValue = (event.target as any).value;

            if (selectedValue !== "-1") {

                // 2) Filter the signals
                const filteredSignals = this.signals.filter(signal => signal.type.id === selectedValue);

                // 3) Re-render with the filtered signals
                this.applyRenderFromParentComponent(filteredSignals, this.signalTypes);

                // 4) Select the new index
                const findSelectedIndex = (signalTypes: Array<SignalType>, selectedValue: string): number => {
                    return signalTypes.findIndex((type: SignalType) => type.id === selectedValue);
                };

                (document.querySelector("#signalTypes") as HTMLSelectElement).selectedIndex = findSelectedIndex(this.signalTypes, selectedValue);
            } else {
                this.applyRenderFromParentComponent(this.signals, this.signalTypes);
            }

            // Finaly, just register the events
            this.applyUIEvents();
        }
    }


}