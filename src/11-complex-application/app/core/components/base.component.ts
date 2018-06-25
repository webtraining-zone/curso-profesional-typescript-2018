import {RenderOptions} from "../options/render-options";
import {ComponentConstructorOptions} from "../options/component-constructor-options";

export class BaseComponent {
    selector: string;

    constructor(options: ComponentConstructorOptions) {
        this.selector = options.selector;
    }

    render(options: RenderOptions): void {
        if (this.selector) {
            const $element = document.querySelector(this.selector);
            $element.innerHTML = options.template(options.data);
        }
    }
}