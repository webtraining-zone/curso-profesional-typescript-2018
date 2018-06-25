import {HttpClient} from "../utils/http-client";
import {ApiConfig} from "../config/api-config";
import {AxiosPromise} from "axios";
import {SignalsResponse} from "../models/signals-response";

export class SignalsService {
    private serviceURL = `${ApiConfig.BASE_URL}/traffic-signals/v1/signals`;
    private _http: HttpClient;

    constructor() {
        this._http = new HttpClient();
    }

    getSignals(): AxiosPromise<SignalsResponse> {
        return this._http.get(this.serviceURL);
    }
}