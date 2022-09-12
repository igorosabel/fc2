import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';
import { Grid } from 'src/app/model/grid.model';
import { Map } from 'src/app/model/map.model';
import { Diamond } from 'src/app/model/diamond.model';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	selectedMap: string|null = '';
	grids: Grid[] = [];
	map: Map = new Map();

	constructor(private as: ApiService, private cms: ClassMapperService) {}

	ngOnInit(): void {
		this.selectedMap = localStorage.getItem('selectedMap');
		if (this.selectedMap !== null) {
			this.loadMap();
		}
	}

	updateMap(): void {
		if (this.selectedMap !== null) {
			localStorage.setItem('selectedMap', this.selectedMap);
			this.loadMap();
		}
		else {
			localStorage.removeItem('selectedMap');
			this.map.reset();
		}
	}

	loadMap(): void {
		if (this.selectedMap !== null) {
			this.as.getGrids(this.selectedMap).subscribe(result => {
				this.grids = this.cms.getGrids(result.list);
				this.map.load(this.grids);
			});
		}
	}

	diamondSelect(diamond: Diamond): void {
		console.log(diamond);
		this.as.updateDiamond(diamond.id).subscribe(result => {
			if (result.status === 'ok') {
				diamond.picked = !diamond.picked;
			}
			else {
				alert('¡Ocurrió un error al actualizar el diamante!');
			}
		});
	}
}
