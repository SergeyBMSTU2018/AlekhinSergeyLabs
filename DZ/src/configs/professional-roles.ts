import { categories } from '../../configs/professional_roles.json'

export const PROFESSIONAL_ROLES = categories

export const PROFESSIONAL_ROLES_IDS = categories.reduce<string[]>((acc, item) => {
	item.roles.forEach((it) => {
		acc.push(it.id)
	})

	return acc
}, [])

export function getProfessionalRolesStr(id: typeof categories[number]['roles'][number]['id']): string {
	return `professional_role=${id}`
}
