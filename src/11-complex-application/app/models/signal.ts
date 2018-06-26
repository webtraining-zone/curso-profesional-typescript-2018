import {SignalType} from "./signal-type";

export class Signal {
    filename: string;
    name: string;
    description: string;
    imageURL?: string;
    summary?: string;
    type?: SignalType
}