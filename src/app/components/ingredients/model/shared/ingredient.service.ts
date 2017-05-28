import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Hop } from '../hop.model';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class IngredientService {

    private API_LOCATION: string = 'http:/localhost:7203';

    constructor(private http: Http, private jsonp: Jsonp) { }

    getHops(): Observable<Hop[]> {

        let params = new URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp.get(this.API_LOCATION + '/api/hops', { search: params })
            // .toPromise()
            // .then(response => response.json() as Hop[])
            .map((res: Response) => res.json().data as Hop[])
            .catch(this.handleError);
    }

    getHops2(onNext: (hopslist: Hop[]) => void): void {
        let params = new URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        this.jsonp.get('http:/localhost:7203/api/hops&callback=JSONP_CALLBACK')
            // .toPromise()
            // .then(response => response.json() as Hop[])
            .map((res: Response) => res.json().data as Hop[])
            .subscribe(onNext, this.handleError);
    }

    // private handleError(error: any): Promise<any> {
    //     console.error("An error occurred", error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

}
