import { Grid } from 'src/app/model/grid.model';

export class Map {
	rows: Grid[][] = [];

	constructor() {}

	load(grids: Grid[]): void {
		this.reset();
		for (let grid of grids) {
			let ind = grid.gridRow -1;
			if (!this.rows[ind]) {
				this.rows[ind] = [];
			}
			this.rows[ind].push(grid);
		}
	}

	reset(): void {
		this.rows = [];
	}
}
