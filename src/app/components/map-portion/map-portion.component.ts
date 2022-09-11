import { Component, OnInit, Input } from '@angular/core';
import { Grid } from 'src/app/model/grid.model';

@Component({
	selector: 'app-map-portion',
	templateUrl: './map-portion.component.html',
	styleUrls: ['./map-portion.component.scss']
})
export class MapPortionComponent implements OnInit {
	@Input() grid: Grid = new Grid();

	constructor() {}
	ngOnInit(): void {}
}
