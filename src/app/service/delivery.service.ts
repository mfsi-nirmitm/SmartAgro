import { Injectable } from "@angular/core";
import { SecureHttp } from "../shared/secure-http";
import { Observable } from "rxjs";
import { API_BASE, API_ENDPOINTS } from "../constants/api-endpoints.constant";
import { Response } from '@angular/http';
import { HttpUtil } from "../util/http.util";
import { TargetDelivery } from "../model/target-delivery.model";

@Injectable()
export class DeliveryService {
    constructor(private _secureHttp: SecureHttp,
    ) {

    }
    public getTargetDeliveryByTask(): Observable<any> {
        return this._secureHttp.get(API_ENDPOINTS.DELIVERY_BY_TASK)
            .map((response: Response) => HttpUtil.extractData<TargetDelivery[]>(response))
            .finally(() => {
            });
    }
    
    public getTargetDeliveryByJob(): Observable<any> {
        return this._secureHttp.get(API_ENDPOINTS.DELIVERY_BY_JOB)
            .map((response: Response) => HttpUtil.extractData<TargetDelivery[]>(response))
            .finally(() => {
            });
    }
}