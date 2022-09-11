/**
 * Páginas
 */
import { MainComponent } from 'src/app/pages/main/main.component';
import { DetailComponent } from 'src/app/pages/detail/detail.component';

export const PAGES: any[] = [
	MainComponent,
	DetailComponent
];

/**
 * Componentes parciales
 */
export const COMPONENTS: any[] = [];

/**
 * Servicios
 */
import { ApiService } from 'src/app/services/api.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';

export const SERVICES: any[] = [
	ApiService,
	ClassMapperService
];
