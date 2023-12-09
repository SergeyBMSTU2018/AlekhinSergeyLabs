import { vacancy_search_order } from '../../configs/dictionaries.json'

export const VACANCY_SEARCH_ORDER = vacancy_search_order

export function getVacancySearchOrder(id: typeof vacancy_search_order[number]['id']): string {
	return `order_by=${id}`
}
