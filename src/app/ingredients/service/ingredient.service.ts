import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Hop } from '../model/hop.model';

import 'rxjs/add/operator/toPromise';

const API_LOCATION: string = 'http://localhost:7203';

const FAKEHOPS = [
		{
			hsi:  "15.0000000",
			id:  0,
			type:  "Bittering",
			betaAcid:  "5.6000000",
			description:  "Bittering hops derived from Wye Challenger.  Good high-alpha bittering hops.\nUsed for: Ales\nAroma: Primarily for bittering\nSubstitutes: Target, Northdown, Challenger\n",
			alphaAcid:  '14.7500000',
			useIn:  'Boil',
			name:  'Admiral',
			countryOfOrigin:  'United Kingdom'
		},
		{
			hsi:  '15.0000000',
			id:  1,
			type:  'Bittering',
			betaAcid:  '5.2500000',
			description:  'Several large Czech breweries like Agnus as a bittering hop because its alpha/beta ratio is relatively high, which they believe makes their beer more stable. High geraniol level, oils indicate dry hopping potential.\nUsed for: Ales\nAroma: Strong hop aroma, spicy\nSubstitutions: Unknown\nStorage: Unknown\n9-15% AA / 4-8% Beta',
			alphaAcid:  '10.5000000',
			useIn:  'Boil',
			name:  'Agnus',
			countryOfOrigin:  'Czech Republic'
		},
		{
			hsi:  '30.0000000',
			id:  2,
			type:  'Aroma',
			betaAcid:  '5.2500000',
			description:  'Distinctive aromatic hops with moderate bittering power from Washington.\nUsed for: American ales and lagers\nAroma: Distinctive floral and citrus aromas\nSubstitutes: Amarillo, Cascade',
			alphaAcid:  '6.0000000',
			useIn:  'Boil',
			name:  'Ahtanum',
			countryOfOrigin:  'U.S.'
        }
    ];

@Injectable()
export class IngredientService {

    private _hopslist: Observable<Hop[]> = null;

    constructor(private http: Http) { }

    public getHops(): Observable<Hop[]> {

        if (!this._hopslist) {
            this._hopslist =  this.http.get(API_LOCATION + '/api/hops')
                .map((res: Response) => res.json().data as Hop[])
                .publishReplay(1).refCount()
                .catch(this.handleError);
        }
        return this._hopslist;
    }

    public getHops2(onNext: (hopslist: Hop[]) => void): void {
        this.http.get(API_LOCATION + '/api/hops')
            .map((res: Response) => res.json().data as Hop[])
            .subscribe(onNext, this.handleError);
    }

    public getHop(id: number): Observable<Hop> {
        return this.getHops()
            .do( (list) => console.log(list))
            .map( hops => hops.find( (h) => h.id === id));
    }
    
    public getHop2(id: number): Hop {
        return FAKEHOPS.find( (h) => h.id === id);
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
