import areas from '../../configs/areas.json'

export const AREAS = areas

export function getAreas(id: typeof areas[number]['id'] | typeof areas[number]['areas'][number]['id'] | typeof areas[number]['areas'][number]['areas'][number]['id']): string {
	return `area=${id}`
}
