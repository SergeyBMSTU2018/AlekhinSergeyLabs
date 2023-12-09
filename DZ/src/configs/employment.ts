import { employment } from '../../configs/dictionaries.json'

export const EMPLOYMENT = employment

export const EMPLOYMENT_IDS = employment.map(({ id }) => id)

export function getEmploymentStr(id: typeof employment[number]['id']): string {
	return `employment=${id}`
}
