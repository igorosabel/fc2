import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';
import { Grid } from 'src/app/model/grid.model';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	grids: Grid[] = [];

	constructor(private as: ApiService, private cms: ClassMapperService) {}

	ngOnInit(): void {
		this.as.getGrids('n').subscribe(result => {
			this.grids = this.cms.getGrids(result.list);
			console.log(this.grids);
		})
	}
}
