import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from 'src/app/model/grid.model';
import { Diamond } from 'src/app/model/diamond.model';
import { GridAndDiamondInterface } from 'src/app/interfaces/interfaces';

@Component({
	selector: 'app-map-portion',
	templateUrl: './map-portion.component.html',
	styleUrls: ['./map-portion.component.scss']
})
export class MapPortionComponent implements OnInit {
	@Input() grid: Grid = new Grid();
	@Output() diamondSelectEvent = new EventEmitter<GridAndDiamondInterface>();

	constructor() {}
	ngOnInit(): void {}

	selectDiamond(diamond: Diamond): void {
		const gridAndDiamond: GridAndDiamondInterface = {
			grid: this.grid.id,
			diamond: diamond.id
		};
		this.diamondSelectEvent.emit(gridAndDiamond);
	}
}
