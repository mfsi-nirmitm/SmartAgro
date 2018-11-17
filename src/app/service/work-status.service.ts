import { Injectable } from "@angular/core";
import { SecureHttp } from "../shared/secure-http";
import { Observable } from "rxjs";
import { API_BASE } from "../constants/api-endpoints.constant";
import { HttpUtil } from "../util/http.util";
import { Response } from '@angular/http';
import { WorkStatusCategories } from "../model/work-status-categories.model";
import { WorkStatusChart } from "../model/work-status-chart.model";

@Injectable()
export class WorkStatusService {
    constructor(private _secureHttp: SecureHttp,
    ) {
    }

    public getStatusCategory(): Observable<any> {
        const customerId = 1;
        const url = API_BASE
            + customerId + '/'
            + 'workstatus/categories';
        return this._secureHttp.get(url)
            .map((response: Response) => HttpUtil.extractData<WorkStatusCategories[]>(response))
            .finally(() => {
            });
    }

    public getStatusChart(): Observable<any> {
        const customerId = 1;
        const url = API_BASE
            + customerId + '/'
            + 'workstatus/chart';
        return this._secureHttp.get(url)
            .map((response: Response) => HttpUtil.extractData<WorkStatusChart[]>(response))
            .finally(() => {
            });
    }

}