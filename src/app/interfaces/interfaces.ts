export interface GridInterface {
	id: number;
	map: string;
	gridCol: number;
	gridRow: number;
	num: number;
	picked: number;
	completed: boolean;
	diamonds: DiamondInterface[];
}

export interface DiamondInterface {
	id: number;
	lat: number;
	lon: number;
	picked: boolean;
}

export interface DiamondsResult {
	status: string;
	list: GridInterface[];
}

export interface StatusResult {
	status: string;
}

export interface GridAndDiamondInterface {
	grid: number;
	diamond: number;
}