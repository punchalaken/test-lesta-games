export interface Icons {
	large: string;
	medium: string;
}

export interface Type {
	icons: {
		default: string;
	};
	name: string;
	title: string;
}

export interface Nation {
	color: string;
	icons: {
		large: string;
		medium: string;
		small: string;
	};
	name: string;
	title: string;
}

export interface Ship {
	title: string;
	description: string;
	icons: Icons;
	level: number;
	type: Type;
	nation: Nation;
}
