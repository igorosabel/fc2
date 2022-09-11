import { GridInterface } from 'src/app/interfaces/interfaces';
import { Diamond } from 'src/app/model/diamond.model';

export class Grid {
	constructor(
		public id: number = -1,
		public map: string = '',
		public gridCol: number = -1,
		public gridRow: number = -1,
		public num: number = -1,
		public picked: number = -1,
		public completed: boolean = false,
		public diamonds: Diamond[] = []
	) {}

	fromInterface(g: GridInterface): Grid {
		this.id = g.id;
		this.map = g.map;
		this.gridCol = g.gridCol;
		this.gridRow = g.gridRow;
		this.num = g.num;
		this.picked = g.picked;
		this.completed = g.completed;
		this.diamonds = g.diamonds.map( d => { return new Diamond().fromInterface(d); });

		return this;
	}

	toInterface(): GridInterface {
		return {
			id: this.id,
			map: this.map,
			gridCol: this.gridCol,
			gridRow: this.gridRow,
			num: this.num,
			picked: this.picked,
			completed: this.completed,
			diamonds: this.diamonds.map( d => { return d.toInterface(); })
		};
	}
}