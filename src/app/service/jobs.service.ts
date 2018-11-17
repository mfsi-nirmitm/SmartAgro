import { Injectable } from "@angular/core";
import { SecureHttp } from "../shared/secure-http";
import { Observable } from "rxjs";
import { API_BASE } from "../constants/api-endpoints.constant";
import { Overview } from "../model/overview.model";
import { HttpUtil } from "../util/http.util";
import { Response } from '@angular/http';

@Injectable()
export class JobsService {
    constructor(private _secureHttp: SecureHttp,
    ) {
    }

    public getOverviewOfJobs(): Observable<any> {
        const customerId = 1;

        const url = API_BASE
            + customerId + '/'
            + 'overview';

        return this._secureHttp.get(url)
            .map((response: Response) => HttpUtil.extractData<Overview[]>(response))
            .finally(() => {
            });
    }

}