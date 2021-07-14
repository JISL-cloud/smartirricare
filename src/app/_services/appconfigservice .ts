import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {

    constructor(private http: HttpClient) { }
    private appConfig: any;

    loadAppConfig(): Promise<any> {
        return this.http
            .get("assets/config.json")
            .toPromise()
            .then(data => {
                console.log(data);
                return (this.appConfig = data);

            });
    }

    getServerUrl(): string {
        return this.appConfig.API_URL;
    }

    getPort(): string {
        return this.appConfig.Port;
    }
}