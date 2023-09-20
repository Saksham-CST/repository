import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {
    baseEndpoint: string = 'https://64ddfcff825d19d9bfb1d3d6.mockapi.io/';
    constructor(private httpclient: HttpClient) { }

    getAPI() {
        let url = this.baseEndpoint + 'Student';
        return this.httpclient.get(url);
    }

    postAPI(req: any) {
        let url = this.baseEndpoint + 'Student';
        return this.httpclient.post(url, req);
    }

}