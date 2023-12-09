import { experience } from '../../configs/dictionaries.json'

export const EXPERIENCE = experience

export const EXPERIENCE_IDS = experience.map(({ id }) => id)

export function getExperienceStr(id: typeof experience[number]['id']): string {
	return `experience=${id}`
}
