import { Component, OnInit } from '@angular/core';
import { Hop } from './model/hop.model';
import { IngredientService } from './shared/ingredient.service';
// import { ToastrService } from "../common/toastr.service";

@Component({
    selector: 'hops-list',
    templateUrl: './hops-list.component.html'
})
export class HopsListComponent implements OnInit {

    public hopdata: Hop[];

    constructor(private ingredientService: IngredientService) { }

    ngOnInit() {
        // this.ingredientService.getHops().subscribe( data => this.hopdata = data);
        this.ingredientService.getHops2( (data) => this.hopdata = data);
    }

    handleItemClicked(item: Hop) {
        console.log('received:', item.name);
        // this.toastr.success(item.name);
    }
}
