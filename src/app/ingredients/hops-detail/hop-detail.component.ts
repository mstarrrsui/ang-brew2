import { Component } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { IngredientService } from "../service/ingredient.service";
import { Hop } from "../model/hop.model";
import { Observable } from 'rxjs/Rx';


@Component({
  templateUrl: './hop-detail.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
  `]
})
export class HopDetailComponent {
  
  hop:Hop;
  
  constructor(private ingredientService: IngredientService, private route: ActivatedRoute) {

  }

  ngOnInit() {


    //this.ingredientService.getHop(+this.route.snapshot.params['id']).subscribe( h => this.hop = h );
    //this.hop = this.ingredientService.getHop2(+this.route.snapshot.params['id']);

    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.ingredientService.getHop(+params.get('id')))
      .subscribe((h: Hop) => this.hop = h);

      //let numbers = Observable.interval(1000);
      //numbers.subscribe(x => console.log(x));
   

    // if (hopid === 0) {
    //   this.hop = {
    //     hsi:  "15.0000000",
    //     id:  0,
    //     type:  "Bittering",
    //     betaAcid:  "5.6000000",
    //     description:  "Bittering hops derived from Wye Challenger.  Good high-alpha bittering hops.\nUsed for: Ales\nAroma: Primarily for bittering\nSubstitutes: Target, Northdown, Challenger\n",
    //     alphaAcid:  '14.7500000',
    //     useIn:  'Boil',
    //     name:  'Admiral',
    //     countryOfOrigin:  'United Kingdom'
    //   };
    // } else if (hopid === 1) {
    //   this.hop = {
    //     hsi:  '15.0000000',
    //     id:  1,
    //     type:  'Bittering',
    //     betaAcid:  '5.2500000',
    //     description:  'Several large Czech breweries like Agnus as a bittering hop because its alpha/beta ratio is relatively high, which they believe makes their beer more stable. High geraniol level, oils indicate dry hopping potential.\nUsed for: Ales\nAroma: Strong hop aroma, spicy\nSubstitutions: Unknown\nStorage: Unknown\n9-15% AA / 4-8% Beta',
    //     alphaAcid:  '10.5000000',
    //     useIn:  'Boil',
    //     name:  'Agnus',
    //     countryOfOrigin:  'Czech Republic'
		//   };
    // } else if (hopid === 2) {
    //   this.hop = {
    //     hsi:  '30.0000000',
    //     id:  2,
    //     type:  'Aroma',
    //     betaAcid:  '5.2500000',
    //     description:  'Distinctive aromatic hops with moderate bittering power from Washington.\nUsed for: American ales and lagers\nAroma: Distinctive floral and citrus aromas\nSubstitutes: Amarillo, Cascade',
    //     alphaAcid:  '6.0000000',
    //     useIn:  'Boil',
    //     name:  'Ahtanum',
    //     countryOfOrigin:  'U.S.'
    //   };
    // }
  }

}