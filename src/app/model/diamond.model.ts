import { DiamondInterface } from 'src/app/interfaces/interfaces';

export class Diamond {
	constructor(
		public id: number = -1,
		public lat: number = -1,
		public lon: number = -1,
		public picked: boolean = false
	) {}

	fromInterface(d: DiamondInterface): Diamond {
		this.id = d.id;
		this.lat = d.lat;
		this.lon = d.lon;
		this.picked = d.picked;

		return this;
	}

	toInterface(): DiamondInterface {
		return {
			id: this.id,
			lat: this.lat,
			lon: this.lon,
			picked: this.picked
		};
	}
}