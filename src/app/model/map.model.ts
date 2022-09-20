import { Grid } from 'src/app/model/grid.model';
import { Diamond } from 'src/app/model/diamond.model';
import { GridAndDiamondInterface } from 'src/app/interfaces/interfaces';

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
	
	check(gridAndDiamond: GridAndDiamondInterface) {
		let gridRow: number = -1;
		let gridCol: number = -1;
		for (let i: number = 0; i<this.rows.length; i++) {
			for (let j: number = 0; j<this.rows[i].length; j++) {
				if (this.rows[i][j].id == gridAndDiamond.grid) {
					gridRow = i;
					gridCol = j;
					break;
				}
			}
			if (gridRow != -1 && gridCol != -1) {
				break;
			}
		}
		const grid = this.rows[gridRow][gridCol];
		const diamond: Diamond | undefined = grid.diamonds.find(x => x.id==gridAndDiamond.diamond);
		if (diamond) {
			diamond.picked = !diamond.picked;
			grid.picked = 0;
			for (let ind: number = 0; ind<grid.diamonds.length; ind++) {
				if (grid.diamonds[ind].picked) {
					grid.picked++;
				}
			}
			grid.completed = false;
			if (grid.picked == grid.num) {
				grid.completed = true;
			}
		}
	}
}
