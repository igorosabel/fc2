import { Injectable } from '@angular/core';
import { GridInterface } from 'src/app/interfaces/interfaces';
import { Grid } from 'src/app/model/grid.model';

@Injectable({
	providedIn: 'root'
})
export class ClassMapperService {
	constructor() {}
	
	getGrids(gs: GridInterface[]): Grid[] {
		return gs.map( g => { return new Grid().fromInterface(g); });
	}

	getGrid(g: GridInterface): Grid {
		return new Grid().fromInterface(g);
	}
}