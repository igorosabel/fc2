import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from 'src/app/model/grid.model';
import { Diamond } from 'src/app/model/diamond.model';

@Component({
	selector: 'app-map-portion',
	templateUrl: './map-portion.component.html',
	styleUrls: ['./map-portion.component.scss']
})
export class MapPortionComponent implements OnInit {
	@Input() grid: Grid = new Grid();
	@Output() diamondSelectEvent = new EventEmitter<Diamond>();

	constructor() {}
	ngOnInit(): void {}

	selectDiamond(diamond: Diamond): void {
		this.diamondSelectEvent.emit(diamond);
	}
}
